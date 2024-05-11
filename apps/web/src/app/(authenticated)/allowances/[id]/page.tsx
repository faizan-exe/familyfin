'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Descriptions, Avatar, Spin, Alert } from 'antd'
import {
  DollarCircleOutlined,
  CalendarOutlined,
  UserOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ChildAllowanceDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [allowance, setAllowance] = useState<Model.Allowance | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!params.id) {
      enqueueSnackbar('No allowance ID provided', { variant: 'error' })
      router.push('/allowances')
      return
    }

    const fetchAllowanceDetails = async () => {
      try {
        const allowances = await Api.Allowance.findManyByChildId(params.id, {
          includes: ['child'],
        })
        if (allowances.length > 0) {
          setAllowance(allowances[0])
        } else {
          setError('No allowance details found.')
          enqueueSnackbar('No allowance details found', { variant: 'info' })
        }
      } catch (err) {
        setError('Failed to fetch allowance details.')
        enqueueSnackbar('Failed to fetch allowance details', {
          variant: 'error',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchAllowanceDetails()
  }, [params.id, router])

  if (loading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (error) {
    return (
      <PageLayout layout="narrow">
        <Alert message={error} type="error" showIcon />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Child Allowance Details</Title>
      <Card bordered={true}>
        {allowance ? (
          <Descriptions title="Allowance Information" bordered column={1}>
            <Descriptions.Item label="Child">
              <Avatar
                src={allowance.child?.pictureUrl}
                icon={<UserOutlined />}
              />
              {allowance.child?.name}
            </Descriptions.Item>
            <Descriptions.Item label="Amount">
              <DollarCircleOutlined /> {allowance.amount} USD
            </Descriptions.Item>
            <Descriptions.Item label="Frequency">
              <CalendarOutlined /> {allowance.frequency}
            </Descriptions.Item>
            <Descriptions.Item label="Last Updated">
              {dayjs(allowance.dateUpdated).format('MMMM D, YYYY')}
            </Descriptions.Item>
          </Descriptions>
        ) : (
          <Text>No details available.</Text>
        )}
      </Card>
    </PageLayout>
  )
}
