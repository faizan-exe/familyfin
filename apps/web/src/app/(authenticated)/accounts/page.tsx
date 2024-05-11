'use client'

import { useState, useEffect } from 'react'
import { Button, Table, Modal, Form, Input, Typography } from 'antd'
import { PlusOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ManageAccountsPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [accounts, setAccounts] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentAccount, setCurrentAccount] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    if (userId) {
      fetchAccounts()
    }
  }, [userId])

  const fetchAccounts = async () => {
    try {
      const accountsData = await Api.Account.findManyByUserId(userId, {
        includes: ['transactions'],
      })
      setAccounts(accountsData)
    } catch (error) {
      enqueueSnackbar('Failed to fetch accounts', { variant: 'error' })
    }
  }

  const showModal = (account = null) => {
    setCurrentAccount(account)
    form.resetFields()
    if (account) {
      form.setFieldsValue(account)
    }
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleFormSubmit = async values => {
    try {
      if (currentAccount) {
        await Api.Account.updateOne(currentAccount.id, values)
        enqueueSnackbar('Account updated successfully', { variant: 'success' })
      } else {
        await Api.Account.createOneByUserId(userId, values)
        enqueueSnackbar('Account created successfully', { variant: 'success' })
      }
      fetchAccounts()
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to update account', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button
            icon={<EyeOutlined />}
            onClick={() => router.push(`/accounts/${record.id}`)}
          >
            View
          </Button>
        </>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title>Manage Family Accounts</Title>
      <Text>Here you can view and manage all family member accounts.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
      >
        Add Account
      </Button>
      <Table dataSource={accounts} columns={columns} rowKey="id" />

      <Modal
        title={currentAccount ? 'Edit Account' : 'Create Account'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <Form.Item
            name="accountType"
            label="Account Type"
            rules={[
              { required: true, message: 'Please input the account type!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="balance" label="Balance">
            <Input type="number" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {currentAccount ? 'Update' : 'Create'}
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  )
}
