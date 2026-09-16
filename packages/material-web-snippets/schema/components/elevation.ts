import { ComponentSchema } from './types'

/**
 * Elevation (no attributes; level is set via the --md-elevation-level CSS custom property).
 * Upstream: {@link https://github.com/material-components/material-web/tree/main/elevation}
 */
export const elevation: ComponentSchema = {
    family: 'elevation',
    familyPrefix: 'md-elevation',
    tags: [
        {
            name: 'md-elevation',
            description: 'Material\'s elevation system is deliberately limited to just a handful of levels. This creative constraint means you need to make thoughtful decisions about your UI\'s elevation story.',
        },
    ],
    attributes: [
    ],
}

export const elevationSchemas: ComponentSchema[] = [elevation]
