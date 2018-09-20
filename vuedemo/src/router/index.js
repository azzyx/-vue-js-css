import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHome from '@/components/Home'
import CSS from '@/components/CSS'
import VueList from '@/components/VueList'


import BaseType from '@/components/homeChild/BaseType'
import CiteType from '@/components/homeChild/CiteType'
import SingleObject from '@/components/homeChild/SingleObject'
import WrapType from  '@/components/homeChild/WrapType'
import Es6NewType from '@/components/homeChild/Es6NewType'

import Pos from '@/components/cssChild/Position'
import Layout from '@/components/cssChild/Layout'
import Dim from '@/components/cssChild/Dimension'
import Mar from '@/components/cssChild/Margin'
import Pad from '@/components/cssChild/Padding'
import Bg from '@/components/cssChild/Background'
import Color from '@/components/cssChild/Color'
import Font from '@/components/cssChild/Font'

Vue.use(VueRouter)

export default new VueRouter({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'VueHome',
      component: VueHome,
      children: [
        {
          path: '/baseType',
          name: 'BaseType',
          component: BaseType
        },
        {
          path: '/home/citeType',
          name: 'CiteType',
          component: CiteType
        },
        {
          path: '/singleObject',
          name: 'SingleObject',
          component: SingleObject
        },
        {
          path: '/wrapType',
          name: 'WrapType',
          component: WrapType
        },
        {
          path: '/es6NewType',
          name: 'Es6NewType',
          component: Es6NewType
        }
      ]
    },
    {
      path: '/css',
      name: 'CSS',
      component: CSS,
      children: [
        {
          path: '/pos',
          name: 'Position',
          component: Pos
        },
        {
          path: '/layout',
          name: "Layout",
          component: Layout
        },
        {
          path: '/dim',
          name: 'Dim',
          component: Dim
        },
        {
          path: '/mar',
          name: "Mar",
          component: Mar
        },
        {
          path: '/pad',
          name: 'Pad',
          component: Pad
        },
        {
          path: '/bg',
          name: 'Bg',
          component: Bg
        },
        {
          path: '/color',
          name: 'Color',
          component: Color
        },
        {
          path: '/font',
          name: 'Font',
          component: Font
        }
      ]
    },
    {
      path: '/vue',
      name: 'VueList',
      component: VueList
    },
    {
      path: '*',
      redirect: '/home',
      component: VueHome
    }
  ]
})
