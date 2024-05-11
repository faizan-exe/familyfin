'use client'

import React, { useEffect, useState } from 'react'
import {
  Typography,
  Descriptions,
  Card,
  List,
  Button,
  Space,
  Divider,
} from 'antd'
import { DollarCircleOutlined, TransactionOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FamilyMemberAccountDetailsPage() {
  const router = useRouter()
  const { id } = useParams<{ id: string }>()
  const { enqueueSnackbar } = useSnackbar()
  const [account, setAccount] = useState<Model.Account | null>(null)
  const [transactions, setTransactions] = useState<Model.Transaction[]>([])

  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const accounts = await Api.Account.findManyByUserId(id, {
          includes: ['user', 'transactions'],
        })
        if (accounts.length > 0) {
          setAccount(accounts[0])
          setTransactions(accounts[0].transactions || [])
        } else {
          enqueueSnackbar('No account data found', { variant: 'error' })
          router.push('/accounts')
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch account data', { variant: 'error' })
      }
    }

    fetchAccountData()
  }, [id, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Account Details</Title>
      <Text type="secondary">
        Here you can view detailed information about the financial account.
      </Text>
      <Divider />
      {account ? (
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Account Type">
            {account.accountType}
          </Descriptions.Item>
          <Descriptions.Item label="Balance">
            <DollarCircleOutlined /> {account.balance?.toFixed(2)}
          </Descriptions.Item>
          <Descriptions.Item label="Owner">
            {account.user?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Account Created">
            {dayjs(account.dateCreated).format('DD/MM/YYYY')}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Text>Loading account details...</Text>
      )}
      <Divider />
      <Title level={3}>Transactions</Title>
      <List
        itemLayout="horizontal"
        dataSource={transactions}
        renderItem={transaction => (
          <List.Item>
            <List.Item.Meta
              avatar={<TransactionOutlined />}
              title={`${transaction.transactionType} - ${transaction.amount?.toFixed(2)}`}
              description={`Date: ${dayjs(transaction.timestamp).format('DD/MM/YYYY HH:mm')}`}
            />
          </List.Item>
        )}
      />
      <Divider />
      <Space>
        <Button type="primary" onClick={() => router.push('/accounts')}>
          Back to Accounts
        </Button>
        <Button onClick={() => router.push(`/transactions/${id}`)}>
          View More Transactions
        </Button>
      </Space>
    </PageLayout>
  )
}
