import { Content } from 'antd/lib/layout/layout'
import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { isAuthSelector } from 'selectors/authSelectors'
import PageRoutes from 'components/page/PageRoutes'
import PageBreadcrumb from 'components/page/PageBreadcrumb'

const PageContent: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  const lastPathname = useMemo(() => {
    if (isAuth) {
      const pathname = localStorage.getItem('pathname')
      return pathname || 'home'
    } else {
      return 'login'
    }
  }, [isAuth])

  return (
    <Content style={{ margin: '0 16px' }}>
      {isAuth && <PageBreadcrumb />}
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <PageRoutes />
        {lastPathname && <Redirect to={lastPathname} />}
      </div>
    </Content>
  )
}

export default PageContent
