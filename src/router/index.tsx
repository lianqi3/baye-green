import Assets from '@/views/Assets'
import Miner from '@/views/Miner'
import MinerPool from '@/views/MinerPool'
import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home'))
const Team = lazy(() => import('@/views/Team'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/miner',
    element: <Miner />,
  },
  {
    path: '/assets',
    element: <Assets />,
  },
  {
    path: '/minerPool',
    element: <MinerPool />,
  },
  {
    path: '/Team',
    element: <Team />,
  },
]

export default routes
