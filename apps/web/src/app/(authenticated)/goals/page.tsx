'use client'

import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Typography,
} from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FinancialGoalsManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [goals, setGoals] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const fetchedGoals = await Api.Goal.findManyByUserId(userId, {
          includes: ['user'],
        })
        setGoals(fetchedGoals)
      } catch (error) {
        enqueueSnackbar('Failed to fetch goals', { variant: 'error' })
      }
    }

    if (userId) {
      fetchGoals()
    }
  }, [userId])

  const handleCreateGoal = async values => {
    try {
      await Api.Goal.createOneByUserId(userId, values)
      enqueueSnackbar('Goal created successfully', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to create goal', { variant: 'error' })
    }
  }

  const handleUpdateGoal = async (goalId, values) => {
    try {
      await Api.Goal.updateOne(goalId, values)
      enqueueSnackbar('Goal updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update goal', { variant: 'error' })
    }
  }

  const handleDeleteGoal = async goalId => {
    try {
      await Api.Goal.deleteOne(goalId)
      enqueueSnackbar('Goal deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete goal', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Financial Goals Management</Title>
      <Paragraph>
        Here you can set, view, and manage your financial goals to track your
        progress towards specific financial targets.
      </Paragraph>
      <Form form={form} onFinish={handleCreateGoal} layout="vertical">
        <Form.Item
          name="description"
          label="Goal Description"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter goal description" />
        </Form.Item>
        <Form.Item
          name="targetAmount"
          label="Target Amount"
          rules={[{ required: true }]}
        >
          <InputNumber
            min={1}
            style={{ width: '100%' }}
            placeholder="Enter target amount"
          />
        </Form.Item>
        <Form.Item name="dueDate" label="Due Date">
          <Input type="date" />
        </Form.Item>
        <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
          Add Goal
        </Button>
      </Form>
      <Row gutter={16} style={{ marginTop: 20 }}>
        {goals?.map(goal => (
          <Col key={goal.id} span={8}>
            <Card
              title={goal.description}
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() =>
                    handleUpdateGoal(goal.id, form.getFieldsValue())
                  }
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDeleteGoal(goal.id)}
                />,
              ]}
            >
              <p>Target Amount: {goal.targetAmount}</p>
              <p>Current Amount: {goal.currentAmount}</p>
              <p>
                Due Date:{' '}
                {goal.dueDate
                  ? dayjs(goal.dueDate).format('YYYY-MM-DD')
                  : 'N/A'}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
