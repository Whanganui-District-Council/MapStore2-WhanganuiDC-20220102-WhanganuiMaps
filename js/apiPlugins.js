/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default {
    plugins: {
        // framework plugins
        AddGroupPlugin: require('../MapStore2/web/client/plugins/AddGroup').default,
        AnnotationsPlugin: require('../MapStore2/web/client/plugins/Annotations').default,
        AutoMapUpdatePlugin: require('../MapStore2/web/client/plugins/AutoMapUpdate').default,
        BackgroundSelectorPlugin: require('../MapStore2/web/client/plugins/BackgroundSelector').default,
        BurgerMenuPlugin: require('../MapStore2/web/client/plugins/BurgerMenu').default,
        CRSSelectorPlugin: require('../MapStore2/web/client/plugins/CRSSelector').default,
        ContentTabs: require('../MapStore2/web/client/plugins/ContentTabs').default,
        ContextPlugin: require('../MapStore2/web/client/plugins/Context').default,
        ContextCreatorPlugin: require('../MapStore2/web/client/plugins/ContextCreator').default,
        ContextManagerPlugin: require('../MapStore2/web/client/plugins/contextmanager/ContextManager').default,
        ContextsPlugin: require('../MapStore2/web/client/plugins/Contexts').default,
        CookiePlugin: require('../MapStore2/web/client/plugins/Cookie').default,
        CreateNewMapPlugin: require('../MapStore2/web/client/plugins/CreateNewMap').default,
        Dashboard: require('../MapStore2/web/client/plugins/Dashboard').default,
        DashboardEditor: require('../MapStore2/web/client/plugins/DashboardEditor').default,
        DashboardsPlugin: require('../MapStore2/web/client/plugins/Dashboards').default,
        DeleteMapPlugin: require('../MapStore2/web/client/plugins/DeleteMap').default,
        DeleteGeoStoryPlugin: require('../MapStore2/web/client/plugins/DeleteGeoStory').default,
        DeleteDashboardPlugin: require('../MapStore2/web/client/plugins/DeleteDashboard').default,
        DetailsPlugin: require('../MapStore2/web/client/plugins/Details').default,
        DrawerMenuPlugin: require('../MapStore2/web/client/plugins/DrawerMenu').default,
        ExpanderPlugin: require('../MapStore2/web/client/plugins/Expander').default,
        FeatureEditorPlugin: require('../MapStore2/web/client/plugins/FeatureEditor').default,
        FeaturedMaps: require('../MapStore2/web/client/plugins/FeaturedMaps').default,
        FeedbackMaskPlugin: require('../MapStore2/web/client/plugins/FeedbackMask').default,
        FilterLayerPlugin: require('../MapStore2/web/client/plugins/FilterLayer').default,
        FloatingLegendPlugin: require('../MapStore2/web/client/plugins/FloatingLegend').default,
        FullScreenPlugin: require('../MapStore2/web/client/plugins/FullScreen').default,
        GeoStoryPlugin: require('../MapStore2/web/client/plugins/GeoStory').default,
        GeoStoriesPlugin: require('../MapStore2/web/client/plugins/GeoStories').default,
        GeoStoryEditorPlugin: require('../MapStore2/web/client/plugins/GeoStoryEditor').default,
        GeoStorySavePlugin: require('../MapStore2/web/client/plugins/GeoStorySave').GeoStorySave,
        GeoStorySaveAsPlugin: require('../MapStore2/web/client/plugins/GeoStorySave').GeoStorySaveAs,
        DashboardSavePlugin: require('../MapStore2/web/client/plugins/DashboardSave').DashboardSave,
        DashboardSaveAsPlugin: require('../MapStore2/web/client/plugins/DashboardSave').DashboardSaveAs,
        GeoStoryNavigationPlugin: require('../MapStore2/web/client/plugins/GeoStoryNavigation').default,
        GlobeViewSwitcherPlugin: require('../MapStore2/web/client/plugins/GlobeViewSwitcher').default,
        GoFull: require('../MapStore2/web/client/plugins/GoFull').default,
        GridContainerPlugin: require('../MapStore2/web/client/plugins/GridContainer').default,
        GroupManagerPlugin: require('../MapStore2/web/client/plugins/manager/GroupManager').default,
        HelpLinkPlugin: require('../MapStore2/web/client/plugins/HelpLink').default,
        HelpPlugin: require('../MapStore2/web/client/plugins/Help').default,
        HomePlugin: require('../MapStore2/web/client/plugins/Home').default,
        IdentifyPlugin: require('../MapStore2/web/client/plugins/Identify').default,
        LanguagePlugin: require('../MapStore2/web/client/plugins/Language').default,
        LayerDownload: require('../MapStore2/web/client/plugins/LayerDownload').default,
        LayerInfoPlugin: require('../MapStore2/web/client/plugins/LayerInfo').default,
        LocatePlugin: require('../MapStore2/web/client/plugins/Locate').default,
        LoginPlugin: require('../MapStore2/web/client/plugins/Login').default,
        ManagerMenuPlugin: require('../MapStore2/web/client/plugins/manager/ManagerMenu').default,
        ManagerPlugin: require('../MapStore2/web/client/plugins/manager/Manager').default,
        MapEditorPlugin: require('../MapStore2/web/client/plugins/MapEditor').default,
        MapExportPlugin: require('../MapStore2/web/client/plugins/MapExport').default,
        MapFooterPlugin: require('../MapStore2/web/client/plugins/MapFooter').default,
        MapImportPlugin: require('../MapStore2/web/client/plugins/MapImport').default,
        MapLoadingPlugin: require('../MapStore2/web/client/plugins/MapLoading').default,
        MapPlugin: require('../MapStore2/web/client/plugins/Map').default,
        MapSearchPlugin: require('../MapStore2/web/client/plugins/MapSearch').default,
        MapsPlugin: require('../MapStore2/web/client/plugins/Maps').default,
        MapCatalogPlugin: require('../MapStore2/web/client/plugins/MapCatalog').default,
        MapTemplatesPlugin: require('../MapStore2/web/client/plugins/MapTemplates').default,
        MeasurePlugin: require('../MapStore2/web/client/plugins/Measure').default,
        MediaEditorPlugin: require('../MapStore2/web/client/plugins/MediaEditor').default,
        MetadataExplorerPlugin: require('../MapStore2/web/client/plugins/MetadataExplorer').default,
        MousePositionPlugin: require('../MapStore2/web/client/plugins/MousePosition').default,
        NotificationsPlugin: require('../MapStore2/web/client/plugins/Notifications').default,
        OmniBarPlugin: require('../MapStore2/web/client/plugins/OmniBar').default,
        PlaybackPlugin: require('../MapStore2/web/client/plugins/Playback.jsx').default,
        PrintPlugin: require('../MapStore2/web/client/plugins/Print').default,
        QueryPanelPlugin: require('../MapStore2/web/client/plugins/QueryPanel').default,
        RedirectPlugin: require('../MapStore2/web/client/plugins/Redirect').default,
        RedoPlugin: require('../MapStore2/web/client/plugins/History').default,
        RulesDataGridPlugin: require('../MapStore2/web/client/plugins/RulesDataGrid').default,
        RulesEditorPlugin: require('../MapStore2/web/client/plugins/RulesEditor').default,
        RulesManagerFooter: require('../MapStore2/web/client/plugins/RulesManagerFooter').default,
        SavePlugin: require('../MapStore2/web/client/plugins/Save').default,
        SaveAsPlugin: require('../MapStore2/web/client/plugins/SaveAs').default,
        SaveStoryPlugin: require('../MapStore2/web/client/plugins/GeoStorySave'),
        ScaleBoxPlugin: require('../MapStore2/web/client/plugins/ScaleBox').default,
        ScrollTopPlugin: require('../MapStore2/web/client/plugins/ScrollTop').default,
        SearchPlugin: require('../MapStore2/web/client/plugins/Search').default,
        SearchServicesConfigPlugin: require('../MapStore2/web/client/plugins/SearchServicesConfig').default,
        SearchByBookmarkPlugin: require('../MapStore2/web/client/plugins/SearchByBookmark').default,
        SettingsPlugin: require('../MapStore2/web/client/plugins/Settings').default,
        SharePlugin: require('../MapStore2/web/client/plugins/Share'),
        SnapshotPlugin: require('../MapStore2/web/client/plugins/Snapshot').default,
        StyleEditorPlugin: require('../MapStore2/web/client/plugins/StyleEditor').default,
        StreetView: require('../MapStore2/web/client/plugins/StreetView').default,
        SwipePlugin: require('../MapStore2/web/client/plugins/Swipe').default,
        TOCItemsSettingsPlugin: require('../MapStore2/web/client/plugins/TOCItemsSettings').default,
        TOCPlugin: require('../MapStore2/web/client/plugins/TOC').default,
        ThematicLayerPlugin: require('../MapStore2/web/client/plugins/ThematicLayer').default,
        ThemeSwitcherPlugin: require('../MapStore2/web/client/plugins/ThemeSwitcher').default,
        TimelinePlugin: require('../MapStore2/web/client/plugins/Timeline').default,
        ToolbarPlugin: require('../MapStore2/web/client/plugins/Toolbar').default,
        TutorialPlugin: require('../MapStore2/web/client/plugins/Tutorial').default,
        UndoPlugin: require('../MapStore2/web/client/plugins/History').default,
        UserManagerPlugin: require('../MapStore2/web/client/plugins/manager/UserManager').default,
        UserExtensionsPlugin: require('../MapStore2/web/client/plugins/UserExtensions').default,
        UserSessionPlugin: require('../MapStore2/web/client/plugins/UserSession').default,
        VersionPlugin: require('../MapStore2/web/client/plugins/Version').default,
        WidgetsBuilderPlugin: require('../MapStore2/web/client/plugins/WidgetsBuilder').default,
        WidgetsPlugin: require('../MapStore2/web/client/plugins/Widgets').default,
        WidgetsTrayPlugin: require('../MapStore2/web/client/plugins/WidgetsTray').default,
        ZoomAllPlugin: require('../MapStore2/web/client/plugins/ZoomAll').default,
        ZoomInPlugin: require('../MapStore2/web/client/plugins/ZoomIn').default,
        ZoomOutPlugin: require('../MapStore2/web/client/plugins/ZoomOut').default
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,

        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader').default
    }
};
