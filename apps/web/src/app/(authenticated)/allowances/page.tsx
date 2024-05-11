'use client'

import { Button, Form, Input, Typography, List, Modal, Select } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select
interface Allowance extends Model.Allowance {
  child: Model.User
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ManageAllowancesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [allowances, setAllowances] = useState<Allowance[]>([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentAllowance, setCurrentAllowance] = useState<Allowance | null>(
    null,
  )
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchAllowances = async () => {
      if (userId) {
        try {
          const user = await Api.User.findOne(userId, {
            includes: ['allowancesAsChild', 'allowancesAsChild.child'],
          })
          setAllowances(user.allowancesAsChild as Allowance[])
        } catch (error) {
          enqueueSnackbar('Failed to fetch allowances', { variant: 'error' })
        }
      }
    }
    fetchAllowances()
  }, [userId])

  const showModal = (allowance: Allowance | null) => {
    setCurrentAllowance(allowance)
    form.resetFields()
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setCurrentAllowance(null)
  }

  const onFinish = async (values: any) => {
    const { amount, frequency, childId } = values
    try {
      if (currentAllowance) {
        await Api.Allowance.updateOne(currentAllowance.id, {
          amount,
          frequency,
          childId,
        })
        enqueueSnackbar('Allowance updated successfully', {
          variant: 'success',
        })
      } else {
        await Api.Allowance.createOneByChildId(childId, { amount, frequency })
        enqueueSnackbar('Allowance created successfully', {
          variant: 'success',
        })
      }
      setIsModalVisible(false)
      setCurrentAllowance(null)
    } catch (error) {
      enqueueSnackbar('Failed to save allowance', { variant: 'error' })
    }
  }

  const deleteAllowance = async (id: string) => {
    try {
      await Api.Allowance.deleteOne(id)
      setAllowances(allowances.filter(a => a.id !== id))
      enqueueSnackbar('Allowance deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete allowance', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Manage Allowances</Title>
      <Text>
        Here you can set up, edit, and review your children's allowances.
      </Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal(null)}
      >
        Add Allowance
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={allowances}
        renderItem={item => (
          <List.Item
            actions={[
              <EditOutlined key="edit" onClick={() => showModal(item)} />,
              <DeleteOutlined
                key="delete"
                onClick={() => deleteAllowance(item.id)}
              />,
            ]}
          >
            <List.Item.Meta
              title={`$${item.amount} - ${item.frequency}`}
              description={`For: ${item.child.name}`}
            />
          </List.Item>
        )}
      />
      <Modal
        title={currentAllowance ? 'Edit Allowance' : 'Add Allowance'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={
            currentAllowance
              ? {
                  amount: currentAllowance.amount,
                  frequency: currentAllowance.frequency,
                  childId: currentAllowance.childId,
                }
              : {}
          }
        >
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please input the amount!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="frequency"
            label="Frequency"
            rules={[
              { required: true, message: 'Please select the frequency!' },
            ]}
          >
            <Select>
              <Option value="weekly">Weekly</Option>
              <Option value="biweekly">Biweekly</Option>
              <Option value="monthly">Monthly</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="childId"
            label="Child"
            rules={[{ required: true, message: 'Please select a child!' }]}
          >
            <Select>
              {allowances.map(a => (
                <Option key={a.childId} value={a.childId}>
                  {a.child.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            {currentAllowance ? 'Update' : 'Create'}
          </Button>
        </Form>
      </Modal>
    </PageLayout>
  )
}
