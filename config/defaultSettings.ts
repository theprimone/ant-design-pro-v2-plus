import { Settings as ProSettings } from '@ant-design/pro-layout';

import { Mode } from '../src/components/RouteTabs/config';

export type DefaultSettings = Partial<ProSettings> & {
  pwa: boolean;

  routeTabs?: {
    mode: Mode;
    /** sticky route tabs */
    fixed?: boolean;
    /**  */
    reload?: boolean;
  };
};

export default {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  autoHideHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Ant Design Pro',
  pwa: false,
  iconfontUrl: '',

  routeTabs: {
    mode: Mode.Route,
    fixed: false,
    reloadable: true,
  },
} as DefaultSettings;
