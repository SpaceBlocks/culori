import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';
import { fixupHueShorter } from '../fixup/hue';
import { fixupAlpha } from '../fixup/alpha';
import { interpolatorLinear } from '../interpolate/linear';
import { differenceHueNaive } from '../difference';

export default {
	mode: 'hwb',
	output: {
		rgb: convertHwbToRgb
	},
	input: {
		rgb: convertRgbToHwb
	},
	channels: ['h', 'w', 'b', 'alpha'],
	ranges: {
		h: [0, 360]
	},
	parsers: [parseHwb],
	interpolate: {
		h: { use: interpolatorLinear, fixup: fixupHueShorter },
		w: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	},
	difference: {
		h: differenceHueNaive
	}
};
