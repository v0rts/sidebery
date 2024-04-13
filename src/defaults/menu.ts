import { MenuConf } from 'src/types'

export const TABS_MENU: MenuConf = [
  { opts: ['undoRmTab', 'mute', 'reload', 'bookmark'] },
  'separator-1',
  {
    name: '%menu.tab.move_to_sub_menu_name',
    opts: ['moveToNewWin', 'moveToWin', 'separator-5', 'moveToPanel', 'moveToNewPanel'],
  },
  {
    name: '%menu.tab.reopen_in_sub_menu_name',
    opts: ['reopenInNewWin', 'reopenInWin', 'separator-6', 'reopenInCtr', 'reopenInNewCtr'],
  },
  {
    name: '%menu.tab.colorize_',
    opts: ['colorizeTab'],
  },
  {
    name: '%menu.tab.sort_sub_menu_name',
    opts: [
      'sortTabsByTitleAscending',
      'sortTabsByTitleDescending',
      'sortTabsByUrlAscending',
      'sortTabsByUrlDescending',
      'sortTabsByAccessTimeAscending',
      'sortTabsByAccessTimeDescending',
      'separator-45654',
      'sortTabsTreeByTitleAscending',
      'sortTabsTreeByTitleDescending',
      'sortTabsTreeByUrlAscending',
      'sortTabsTreeByUrlDescending',
      'sortTabsTreeByAccessTimeAscending',
      'sortTabsTreeByAccessTimeDescending',
    ],
  },
  'separator-2',
  'pin',
  'duplicate',
  'discard',
  'copyTabsUrls',
  'copyTabsTitles',
  'editTabTitle',
  'separator-3',
  'group',
  'flatten',
  'separator-4',
  'urlConf',
  'close',
]

export const TABS_PANEL_MENU: MenuConf = [
  { opts: ['undoRmTab', 'muteAllAudibleTabs', 'reloadTabs', 'discardTabs'] },
  'separator-1224',
  {
    name: '%menu.tabs_panel.sort_all_sub_menu_name',
    opts: [
      'sortAllTabsByTitleAscending',
      'sortAllTabsByTitleDescending',
      'sortAllTabsByUrlAscending',
      'sortAllTabsByUrlDescending',
      'sortAllTabsByAccessTimeAscending',
      'sortAllTabsByAccessTimeDescending',
    ],
  },
  'separator-7',
  'selectAllTabs',
  'collapseInactiveBranches',
  'closeTabsDuplicates',
  'closeTabs',
  'separator-8',
  'bookmarkTabsPanel',
  'restoreFromBookmarks',
  'convertToBookmarksPanel',
  'separator-9',
  'openPanelConfig',
  'hidePanel',
  'removePanel',
]

export const BOOKMARKS_MENU: MenuConf = [
  {
    name: '%menu.bookmark.open_in_sub_menu_name',
    opts: [
      'openInNewWin',
      'openInNewPrivWin',
      'separator-9',
      'openInPanel',
      'openInNewPanel',
      'separator-10',
      'openInCtr',
    ],
  },
  {
    name: '%menu.bookmark.sort_sub_menu_name',
    opts: [
      'sortByNameAscending',
      'sortByNameDescending',
      'sortByLinkAscending',
      'sortByLinkDescending',
      'sortByTimeAscending',
      'sortByTimeDescending',
    ],
  },
  'separator-5',
  'createBookmark',
  'createFolder',
  'createSeparator',
  'separator-8',
  'openAsBookmarksPanel',
  'openAsTabsPanel',
  'separator-7',
  'copyBookmarksUrls',
  'copyBookmarksTitles',
  'moveBookmarksTo',
  'edit',
  'delete',
]

export const BOOKMARKS_PANEL_MENU: MenuConf = [
  'collapseAllFolders',
  'switchViewMode',
  'convertToTabsPanel',
  'separator-9',
  'unloadPanelType',
  'openPanelConfig',
  'hidePanel',
  'removePanel',
]

export const HISTORY_MENU: MenuConf = [
  'open',
  'separator-1',
  'copyHistoryUrls',
  'copyHistoryTitles',
  'separator-2',
  'deleteVisits',
  'deleteSites',
]

export const NEW_TAB_MENU: MenuConf = [
  'newTabNoContainer',
  'separator-10',
  'newTabContainers',
  'newTabNewContainer',
  'separator-12',
  'manageShortcuts',
  'manageContainers',
]

// TODO: rm
export const OTHER_PANELS_MENU: MenuConf = [
  'openPanelConfig',
  'unloadPanelType',
  'hidePanel',
  'removePanel',
]
