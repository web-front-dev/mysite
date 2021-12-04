import { FileProtectOutlined, SearchOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import MenuFormalizationNetworks from 'components/menu/MenuFormalizationNetworks'
import MenuSearchNetworks from 'components/menu/MenuSearchNetworks'

const MenuNetworks = () => {
  return (
    <>
      <SubMenu key="Поиск" icon={<SearchOutlined />} title="Поиск">
        <MenuSearchNetworks />
      </SubMenu>
      <SubMenu
        key="Оформление"
        icon={<FileProtectOutlined />}
        title="Оформление"
      >
        <MenuFormalizationNetworks />
      </SubMenu>
    </>
  )
}

export default MenuNetworks
