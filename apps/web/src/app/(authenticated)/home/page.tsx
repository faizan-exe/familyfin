'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Statistic, Button } from 'antd'
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DollarOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [user, setUser] = useState(null)
  const [accounts, setAccounts] = useState([])
  const [goals, setGoals] = useState([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('User not found, please login.', { variant: 'error' })
      // Removed redirection to non-existent '/login' path
      return
    }

    const fetchData = async () => {
      try {
        const userData = await Api.User.findOne(userId, {
          includes: ['accounts', 'goals'],
        })
        setUser(userData)
        setAccounts(userData.accounts || [])
        setGoals(userData.goals || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch user data.', { variant: 'error' })
      }
    }

    fetchData()
  }, [userId, router])

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Dashboard</Title>
      <Text>Welcome back, {user?.name || 'User'}!</Text>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Balance"
              value={accounts.reduce(
                (acc, account) => acc + (account.balance || 0),
                0,
              )}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<DollarOutlined />}
              suffix="USD"
            />
            <Button type="primary" onClick={() => router.push('/accounts')}>
              Manage Accounts
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Goals Progress"
              value={goals.reduce(
                (acc, goal) => acc + (goal.currentAmount || 0),
                0,
              )}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ArrowUpOutlined />}
              suffix="USD"
            />
            <Button type="primary" onClick={() => router.push('/goals')}>
              View Goals
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Notifications"
              value={user?.notifications?.length || 0}
              valueStyle={{ color: '#234abc' }}
              prefix={<NotificationOutlined />}
            />
            <Button
              type="primary"
              onClick={() =>
                enqueueSnackbar('Feature not implemented yet', {
                  variant: 'info',
                })
              }
            >
              Show Notifications
            </Button>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
