import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');

const nativecloud: AppRouteModule = {
  path: '/nativecloud',
  name: 'NativeCloud',
  component: LAYOUT,

  meta: {
    
    icon: 'ion:cloud-outline',
    title: t('routes.demo.nativecloud.nativecloud'),
    orderNo: 1000,
  },
  children: [

    {
      path: 'k8sdoc',
      name: 'k8sdoc',
      component: IFrame,
      meta: {
        frameSrc: 'https://kubernetes.io/zh-cn/docs/home/',
        title: t('routes.demo.nativecloud.k8sdoc'),
      },
    },
    {
      path: 'clusters',
      name: 'clusters',
      component: () => import('/@/views/dashboard/cluster/index.vue'),
      meta: {
        title: t('routes.demo.nativecloud.clusters'),
      },
    },
    {
      path: 'work',
      name: 'work',
      component: () => import('/@/views/demo/table/Basic.vue'),
      meta: {
        title: t('routes.demo.nativecloud.work'),
        children: [
          {
            path: 'pods',
            name: t('routes.demo.nativecloud.pod'),
          },
          {
            path: 'deployment',
            name: t('routes.demo.nativecloud.deployment'),
          },
          {
            path: 'service',
            name: t('routes.demo.nativecloud.service'),
          },
        ],
      },
    },
    {
      path: 'dataconfig',
      name: 'dataconfig',
      component: () => import('/@/views/demo/table/Basic.vue'),
      meta: {
        title: t('routes.demo.nativecloud.dataconfig'),
        children: [
          {
            path: 'pv',
            name: t('routes.demo.nativecloud.pv'),
          },
          {
            path: 'pvc',
            name: t('routes.demo.nativecloud.pvc'),
          },
        ],
      },
    },
    {
      path: 'balance',
      name: 'balance',
      component: () => import('/@/views/demo/table/Basic.vue'),
      meta: {
        title: t('routes.demo.nativecloud.balance'),
        
      },
    },
  ],
};

export default nativecloud;
