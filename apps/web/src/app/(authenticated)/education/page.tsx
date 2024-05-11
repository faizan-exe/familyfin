'use client'

import { useEffect, useState } from 'react'
import { Typography, Card, Col, Row, Space } from 'antd'
import { BookOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function FinancialEducationPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [educationalContents, setEducationalContents] = useState([])

  useEffect(() => {
    if (userId) {
      Api.Contentaccess.findManyByUserId(userId, { includes: ['content'] })
        .then(contentAccesses => {
          const contents = contentAccesses.map(access => access.content)
          setEducationalContents(contents)
        })
        .catch(() => {
          enqueueSnackbar('Failed to fetch educational content.', {
            variant: 'error',
          })
        })
    }
  }, [userId])

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <BookOutlined /> Financial Education
        </Title>
        <Text>
          Explore a variety of educational content tailored to help you manage
          your finances effectively across different stages of life.
        </Text>
        <Row gutter={[16, 16]}>
          {educationalContents?.map(content => (
            <Col key={content.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={content.title}
                bordered={false}
                hoverable
                onClick={() => router.push(`/education/${content.id}`)}
              >
                <Text>{content.description}</Text>
                <Text type="secondary" style={{ display: 'block' }}>
                  Age Group: {content.ageGroup}
                </Text>
                <Text type="secondary">
                  Updated: {dayjs(content.dateUpdated).format('DD MMM YYYY')}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
