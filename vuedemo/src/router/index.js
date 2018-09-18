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
