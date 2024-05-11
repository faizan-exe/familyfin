'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Progress, Button, Card, Space } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FinancialGoalsDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [goal, setGoal] = useState(null)

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found', { variant: 'error' })
      router.push('/home')
      return
    }

    const fetchGoalDetails = async () => {
      try {
        const goals = await Api.Goal.findManyByUserId(userId, {
          includes: ['user'],
        })
        const goalDetails = goals.find(g => g.id === params.id)
        if (!goalDetails) {
          enqueueSnackbar('Goal not found', { variant: 'error' })
          router.push('/goals')
        } else {
          setGoal(goalDetails)
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch goal details', { variant: 'error' })
      }
    }

    fetchGoalDetails()
  }, [userId, params.id, router])

  const handleBack = () => {
    router.push('/goals')
  }

  const progressPercentage = goal
    ? Math.round((goal.currentAmount / goal.targetAmount) * 100)
    : 0

  return (
    <PageLayout layout="narrow">
      <Button
        onClick={handleBack}
        icon={<ArrowLeftOutlined />}
        style={{ marginBottom: 16 }}
      >
        Back to Goals
      </Button>
      <Card bordered={false}>
        <Title level={2}>Financial Goal Details</Title>
        {goal ? (
          <Space direction="vertical" size="large">
            <Text>
              <strong>Description:</strong> {goal.description}
            </Text>
            <Text>
              <strong>Target Amount:</strong> ${goal.targetAmount}
            </Text>
            <Text>
              <strong>Current Amount:</strong> ${goal.currentAmount}
            </Text>
            <Text>
              <strong>Due Date:</strong>{' '}
              {dayjs(goal.dueDate).format('MMMM D, YYYY')}
            </Text>
            <Progress
              percent={progressPercentage}
              status={progressPercentage < 100 ? 'active' : 'success'}
            />
          </Space>
        ) : (
          <Text>Loading goal details...</Text>
        )}
      </Card>
    </PageLayout>
  )
}
