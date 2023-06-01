import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const ai: AppRouteModule = {
  path: '/ai',
  name: 'AI',
  component: LAYOUT,

  meta: {
    
    icon: 'ion:cloud-outline',
    title: t('routes.demo.ai.ai'),
    orderNo: 3000,
  },
  children: [

    {
      path: 'chatgpt',
      name: 'chatgpt',
      component: IFrame,
      meta: {
        frameSrc: 'http://localhost:3000/',
        title: t('routes.demo.ai.chatgpt'),
      },
    },
    {
      path: 'aimonitor',
      name: 'aimonitor',
      component: () => import('/@/views/dashboard/cluster/index.vue'),
      meta: {
        title: t('routes.demo.ai.aimonitor'),
      },
    },
    {
      path: 'aiops',
      name: 'aiops',
      component: () => import('/@/views/dashboard/cluster/index.vue'),
      meta: {
        title: t('routes.demo.ai.aiops'),
      },
    },
  ]
    
};

export default ai;
