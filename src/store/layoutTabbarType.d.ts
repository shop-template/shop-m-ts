import type { BadgeProps } from 'vant'

export declare namespace layoutTabbarType {
  interface ItemObjectType {
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
    to: string
    replace?: boolean
  }

  interface ChangeItemObject {
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
    to?: string
    replace?: boolean
  }

  interface SetTabBarItem {
    index: number
    detail: ChangeItemObject
  }
}
