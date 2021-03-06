import { viewPort } from '../utils';

export const PREFERENCES_DEFAULTS = {
	mode: 'visual',
	isSidebarOpened: ! viewPort.isExtraSmall(),
	panels: { 'post-status': true },
	recentlyUsedBlocks: [],
	blockUsage: {},
	features: {
		fixedToolbar: true,
	},
};
