import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = []

  const itemsUser = []

  const itemsTopbar = [
    {
      key: '/home',
      label: 'Dashboard',
      onClick: () => goTo('/home'),
    },

    {
      key: '/accounts',
      label: 'Accounts',
      onClick: () => goTo('/accounts'),
    },

    {
      key: '/goals',
      label: 'Manage Goals',
      onClick: () => goTo('/goals'),
    },

    {
      key: '/education',
      label: 'Financial Education',
      onClick: () => goTo('/education'),
    },

    {
      key: '/allowances',
      label: 'Child Allowance Management',
      onClick: () => goTo('/allowances'),
    },

    {
      key: '/investments',
      label: 'Micro-Investing',
      onClick: () => goTo('/investments'),
    },
  ]

  const itemsSubNavigation = [
    {
      key: '/home',
      label: 'Dashboard',
    },

    {
      key: '/accounts',
      label: 'Accounts',
    },

    {
      key: '/accounts/:id',
      label: 'Account Details',
    },

    {
      key: '/goals',
      label: 'Manage Goals',
    },

    {
      key: '/goals/:id',
      label: 'Goal Details',
    },

    {
      key: '/education',
      label: 'Financial Education',
    },

    {
      key: '/allowances',
      label: 'Child Allowance Management',
    },

    {
      key: '/allowances/:id',
      label: 'Allowance Details',
    },

    {
      key: '/investments',
      label: 'Micro-Investing',
    },

    {
      key: '/transactions/:id',
      label: 'Transaction Details',
    },
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
