import React from "react"
import { createBrowserRouter, RouterProvider, useLocation, useRoutes } from "react-router-dom"

import { BasePage } from "./BasePage"
import Home from "@components/Home"
import Presentation from '@components/Presentation/index'
import Support from '@components/Support/index'
import Contact from '@components/Contact/index'
import Thanks from '@containers/Thanks/index'
import MentionLegales from '@components/Legal-mentions/index'

// Guides
import Guides from '@components/Guides/index'
import MentalRage from '@components/Guides/Mental&rage/index'
import RoleChampion from '@components/Guides/RoleChampion/index'
import ProgressLol from '@components/Guides/ProgressLol/index'
import LowElo from '@components/Guides/LowElo/index'
import WinLane from '@components/Guides/WinLane/index'
import VisionGame from '@components/Guides/VisionGame/index'

// Trollpicks
import TrollPicks from '@containers/TrollPicks/index'
import Trollpick from '@containers/TrollPicks/Trollpick/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BasePage>
        <Home />
      </BasePage>
    ),
  },
  {
    path: "/trollpicks",
    element: (
      <BasePage>
        <TrollPicks />
      </BasePage>
    )
  },
  {
    path: "/trollpicks/:name/:id",
    element: (
      <BasePage>
        <Trollpick />
      </BasePage>
    )
  },
  {
    path: "/presentation",
    element: (
      <BasePage>
        <Presentation />
      </BasePage>
    )
  },
  {
    path: "/guides",
    element: (
      <BasePage>
        <Guides />
      </BasePage>
    )
  },
  {
    path: "/guides/mental&rage",
    element: (
      <BasePage>
        <MentalRage />
      </BasePage>
    )
  },
  {
    path: "/guides/role-champion",
    element: (
      <BasePage>
        <RoleChampion />
      </BasePage>
    )
  },
  {
    path: "/guides/progresser-sur-leagueOfLegends",
    element: (
      <BasePage>
        <ProgressLol />
      </BasePage>
    )
  },
  {
    path: "/guides/sortir-du-bas-elo",
    element: (
      <BasePage>
        <LowElo />
      </BasePage>
    )
  },
  {
    path: "/guides/gagner-sa-phase-de-lane",
    element: (
      <BasePage>
        <VisionGame />
      </BasePage>
    )
  },
  {
    path: "/me-soutenir",
    element: (
      <BasePage>
        <Support />
      </BasePage>
    ),
  },
  {
    path: "/me-contacter",
    element: (
      <BasePage>
        <Contact />
      </BasePage>
    )
  },
  {
    path: "/mentions-legales",
    element: (
      <BasePage>
        <MentionLegales />
      </BasePage>
    )
  },
  {
    path: "/remerciements",
    element: (
      <BasePage>
        <Thanks />
      </BasePage>
    )
  }
])


export const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  )
}



