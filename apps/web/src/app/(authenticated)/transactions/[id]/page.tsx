'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Descriptions, Spin, Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function TransactionDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [transaction, setTransaction] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('Transaction ID is missing', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchTransaction = async () => {
      try {
        const transactionData = await Api.Transaction.findOne(params.id, {
          includes: ['account', 'investments'],
        })
        setTransaction(transactionData)
      } catch (error) {
        enqueueSnackbar('Failed to fetch transaction details', {
          variant: 'error',
        })
        router.push('/home')
      } finally {
        setLoading(false)
      }
    }

    fetchTransaction()
  }, [params.id, router])

  const goBack = () => {
    router.push('/home')
  }

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!transaction) {
    return (
      <PageLayout layout="narrow">
        <Text>No transaction found.</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Button
        onClick={goBack}
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: 16 }}
      >
        Back
      </Button>
      <Title level={2}>Transaction Details</Title>
      <Card>
        <Descriptions bordered>
          <Descriptions.Item label="Transaction ID">
            {transaction.id}
          </Descriptions.Item>
          <Descriptions.Item label="Amount">{`$${transaction.amount}`}</Descriptions.Item>
          <Descriptions.Item label="Type">
            {transaction.transactionType}
          </Descriptions.Item>
          <Descriptions.Item label="Timestamp">
            {dayjs(transaction.timestamp).format('MMMM D, YYYY h:mm A')}
          </Descriptions.Item>
          <Descriptions.Item label="Account ID">
            {transaction.accountId}
          </Descriptions.Item>
          <Descriptions.Item label="Date Created">
            {dayjs(transaction.dateCreated).format('MMMM D, YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label="Date Updated">
            {dayjs(transaction.dateUpdated).format('MMMM D, YYYY')}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </PageLayout>
  )
}
