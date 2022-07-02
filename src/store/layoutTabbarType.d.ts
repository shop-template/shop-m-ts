import type { BadgeProps } from 'vant'

export declare namespace layoutTabbarType {
  interface ItemBaseObjectType {
    name?: number | string
    title?: string
    icon?: string
    iconPrefix?: string
    'icon-prefix'?: string
    dot?: boolean
    badge?: number | string
    badgeProps?: BadgeProps
    'badge-props'?: BadgeProps
    url?: string
    replace?: boolean
  }

  interface ItemObjectType extends ItemBaseObjectType {
    name: number | string
    title: string
    icon: string
    to: string
  }

  interface ChangeItemObject extends ItemBaseObjectType {
    to?: string
  }

  interface SetTabBarItem {
    index: number
    detail: ChangeItemObject
  }

  interface AddTabbar {
    index: number
    detail: ItemObjectType
  }
}
