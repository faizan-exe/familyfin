'use client'

import { useEffect, useState } from 'react'
import { Typography, Table, Button, Space } from 'antd'
import { DollarCircleOutlined, BankOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MicroInvestingOverviewPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [accounts, setAccounts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchAccounts = async () => {
      setLoading(true)
      try {
        const accountsData = await Api.Account.findManyByUserId(userId, {
          includes: ['transactions', 'transactions.investments'],
        })
        setAccounts(accountsData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch accounts data.', { variant: 'error' })
      } finally {
        setLoading(false)
      }
    }

    fetchAccounts()
  }, [userId, router])

  const columns = [
    {
      title: 'Account Type',
      dataIndex: 'accountType',
      key: 'accountType',
      render: text => <Text>{text || 'N/A'}</Text>,
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'balance',
      render: balance => <Text>${balance.toFixed(2)}</Text>,
    },
    {
      title: 'Investments',
      key: 'investments',
      render: (_, record) => (
        <Space size="middle">
          <Button
            icon={<DollarCircleOutlined />}
            onClick={() => router.push(`/accounts/${record.id}`)}
          >
            View Investments
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="narrow">
      <Title level={2}>
        <BankOutlined /> Micro-Investing Overview
      </Title>
      <Text>
        Here you can view and manage your automated investments made from
        rounding up transactions.
      </Text>
      <Table
        columns={columns}
        dataSource={accounts}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </PageLayout>
  )
}
