import Vue from 'vue'
import Router from 'vue-router'
import workbench from '@/pages/workbench/workbench'
import business from '@/pages/workbench/components/business'  
import commission from '@/pages/workbench/components/commission'  
import detail from '@/pages/workbench/components/detail'  
import mall from '@/pages/workbench/components/mall'   
import dynamic from '@/pages/workbench/components/dynamic'   
import edairShan from '@/pages/workbench/components/edairShan'  
import veri from '@/pages/workbench/components/veri'   
import miaosha from '@/pages/workbench/components/miaosha' 
import pintuan from '@/pages/workbench/components/pintuan' 
import product from '@/pages/workbench/components/product'  
import korder from '@/pages/workbench/components/korder' 
import between from '@/pages/workbench/components/between'
import fdongtai from '@/pages/workbench/components/fdongtai'
import receive from '@/pages/workbench/components/receive'
import cut from '@/pages/workbench/components/cut'
import radar from '@/pages/radar/radar'
import task from '@/pages/radar/components/task'
import create from '@/pages/radar/components/create'
import message from '@/pages/message/message'
import customer from '@/pages/customer/customer'
import user from '@/pages/user/user'
import editorData from '@/pages/user/components/editorData'
import Set from '@/pages/user/components/Set'
import liuyan from '@/pages/user/components/liuyan'
import posters from '@/pages/user/components/posters'
import guan from '@/pages/user/components/guan' 
import btncloos from '@/pages/user/components/btncloos' 
import Zposters from '@/pages/user/components/Zposters' 
import huashu from '@/pages/user/components/huashu' 
import feedback from '@/pages/user/components/feedback' 
import addHua from '@/pages/user/components/addHua'  
import share from '@/pages/user/components/share'  
import bianji from '@/pages/user/components/bianji' 
import language from '@/pages/user/components/language'
import newx from '@/pages/newx'
import aa from '@/aa'
import qunfa from '@/pages/message/components/qunfa'
import session from '@/pages/message/components/session'
import Daily from '@/pages/radar/components/daily'
import chakan from '@/pages/radar/components/chakan'
import cjsj from '@/pages/radar/components/cjsj'
import follow from '@/pages/radar/components/follow'
import editor from '@/pages/radar/components/editor'
import guanlian from '@/pages/radar/components/guanlian'
import label from '@/pages/radar/components/label'
import statistical from '@/pages/radar/components/statistical'
import editorLabel from '@/pages/customer/components/editorLabel'
import sousuo from '@/pages/customer/components/sousuo'
import report from '@/pages/customer/components/report' 
import dd from '@/pages/dd' 

Vue.use(Router)


export default new Router({
  routes: [
    
    {
      path: '/editorData',
      name: 'editorData',
      component: editorData
    },
     
    {
      path: '/edairShan',
      name: 'edairShan',
      component: edairShan
    },
    {
      path: '/guanlian',
      name: 'guanlian',
      component: guanlian
    },
    {
      path: '/bianji',
      name: 'bianji',
      component: bianji
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/language',
      name: 'language',
      component: language
    },
    {
      path: '/set',
      name: 'set',
      component: Set
    },
    {
      path: '/huashu',
      name: 'huashu',
      component: huashu
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/liuyan',
      name: 'liuyan',
      component: liuyan
    },
    {
      path: '/addHua',
      name: 'addHua',
      component: addHua
    },
    {
      path: '/posters',
      name: 'posters',
      component: posters
    },
    {
      path: '/btncloos',
      name: 'btncloos',
      component: btncloos
    },
    {
      path: '/veri',
      name: 'veri',
      component: veri
    },
    {
      path: '/zposters',
      name: 'Zposters',
      component: Zposters
    },
    {
      path: '/dd',
      name: 'dd',
      component: dd
    },
    {
      path: '/guan',
      name: 'guan',
      component: guan
    },
    {
      path: '/',
      name: 'radar',
      component: radar
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: workbench
    },
    {
      path: '/korder',
      name: 'korder',
      component: korder
    }, 
    {
      path: '/pintuan',
      name: 'pintuan',
      component: pintuan
    },
    {
      path: '/fdongtai',
      name: 'fdongtai',
      component: fdongtai
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/miaosha',
      name: 'miaosha',
      component: miaosha
    },
    {
      path: '/receive',
      name: 'receive',
      component: receive
    },
    {
      path: '/cut',
      name: 'cut',
      component: cut
    },
    {
      path: '/product',
      name: 'product',
      component: product   
    },
    {
      path: '/business',
      name: 'business',
      component: business   
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail   
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall    
    },
    {
      path: '/between',
      name: 'between',
      component: between    
    },
    {
      path: '/commission',
      name: 'commission',
      component: commission   
    },
    {
      path: '/sousuo',
      name: 'sousuo',
      component: sousuo
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/statistical',
      name: 'statistical',
      component: statistical
    },
    {
      path: '/message',
      name: 'message',
      component: message,
    },
    {
      path: '/qunfa',
      name: 'qunfa',
      component: qunfa,
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
    },
    {
      path: '/label',
      name: 'label',
      component: label,
    },
    {
      path: '/session',
      name: 'session',
      component: session
    },
    {
      path:'/task',
      name:'task',
      component:task
    },
    {
      path:'/cjsj',
      name:'cjsj',
      component:cjsj
    },
    {
      path:'/follow',
      name:'follow',
      component:follow
    },
 
    {
      path: '/customer',
      name: 'customer',
      component: customer  
    },
    {
      path: '/editorLabel',
      name: 'editorLabel',
      component: editorLabel  
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/newx',
      name: 'newx',
      component: newx
    },
    {
      path: '/chakan',
      name: 'chakan',
      component: chakan
    },
    {
      path: '/a',
      name: 'a',
      component:aa
    },
    {
      path: '/create',
      name: 'create',
      component:create
    },
    {
      path: '/daily',
      name: 'daily',
      component:Daily
    },
  ]
})
