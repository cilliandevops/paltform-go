import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/cronjob/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'logs',
      name: 'logs',
      component: () => import('/@/views/sys/iframe/FrameBlank.vue'),
      meta: {
        frameSrc: 'https://www.bing.com/search?q=%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9F&qs=n&form=QBRE&sp=-1&lq=0&pq=%E6%97%A5%E5%BF%97%E7%B3%BB%E7%BB%9Fe&sc=10-5&sk=&cvid=48210B160ABB4A55A3D58C1F1BB9AAE4&ghsh=0&ghacc=0&ghpl=',
        title: t('routes.dashboard.logs'),
      },
    },
    {
      path: 'machines',
      name: 'machines',
      component: () => import('/@/views/dashboard/machines/index.vue'),
      meta: {
        title: t('routes.dashboard.machines'),
      },
    },
    {
      path: 'network',
      name: 'network',
      component: () => import('/@/views/dashboard/webshell/index.vue'),
      meta: {
        title: t('routes.dashboard.network'),
      },
    },
    {
      path: 'terminal',
      name: 'terminal',
      component: () => import('/@/views/dashboard/terminal/index.vue'),
      meta: {
        title: t('routes.dashboard.terminal'),
      },
    },
    {
      path: 'jumpserver',
      name: 'jumpserver',
      component: () => import('/@/views/sys/iframe/FrameBlank.vue'),
      meta: {
        frameSrc: 'http://localhost:5913/',
        title: t('routes.dashboard.jumpserver'),
      },
    },
  ],
};

export default dashboard;
