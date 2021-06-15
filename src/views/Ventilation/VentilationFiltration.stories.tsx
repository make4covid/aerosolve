import { Story } from '@storybook/react'
import { StepViewProps } from 'data'
import { VentilationFiltration as VentilationFiltrationComponent } from './VentilationFiltration'

export default {
  title: 'Aerosolve/Views/Ventilation & Filtration / Ventilation Filtration',
  component: VentilationFiltrationComponent,
}

export const VentilationFiltration: Story<StepViewProps> = (args) => (
  <VentilationFiltrationComponent {...args} />
)
