import { ComponentSchema } from './types'
import { focusRing } from './focus-ring'
import { badgeSchemas } from './badge'
import { buttonSchemas } from './button'
import { cardSchemas } from './card'
import { checkboxSchemas } from './checkbox'
import { chipsSchemas } from './chips'
import { dialogSchemas } from './dialog'
import { dividerSchemas } from './divider'
import { elevationSchemas } from './elevation'
import { fabSchemas } from './fab'
import { fieldSchemas } from './field'
import { iconSchemas } from './icon'
import { iconButtonSchemas } from './icon-button'
import { itemSchemas } from './item'
import { listSchemas } from './list'
import { menuSchemas } from './menu'
import { navigationBarSchemas } from './navigation-bar'
import { navigationDrawerSchemas } from './navigation-drawer'
import { navigationTabSchemas } from './navigation-tab'
import { progressSchemas } from './progress'
import { radioSchemas } from './radio'
import { rippleSchemas } from './ripple'
import { segmentedButtonSchemas } from './segmented-button'
import { selectSchemas } from './select'
import { sliderSchemas } from './slider'
import { switchSchemas } from './switch'
import { tabsSchemas } from './tabs'
import { textfieldSchemas } from './textfield'

// One file per component family; register new families here.
// (Multi-tag families sharing attributes, e.g. button, keep one file per family.)
export const components: ComponentSchema[] = [
    focusRing,
    ...badgeSchemas,
    ...buttonSchemas,
    ...cardSchemas,
    ...checkboxSchemas,
    ...chipsSchemas,
    ...dialogSchemas,
    ...dividerSchemas,
    ...elevationSchemas,
    ...fabSchemas,
    ...fieldSchemas,
    ...iconSchemas,
    ...iconButtonSchemas,
    ...itemSchemas,
    ...listSchemas,
    ...menuSchemas,
    ...navigationBarSchemas,
    ...navigationDrawerSchemas,
    ...navigationTabSchemas,
    ...progressSchemas,
    ...radioSchemas,
    ...rippleSchemas,
    ...segmentedButtonSchemas,
    ...selectSchemas,
    ...sliderSchemas,
    ...switchSchemas,
    ...tabsSchemas,
    ...textfieldSchemas,
]
