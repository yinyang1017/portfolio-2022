declare module 'vanta/dist/vanta.clouds2.min' {
    const clouds2: any;
    export interface ICloudParams {
        el: string
        mouseControls: boolean
        touchControls: boolean
        gyroControls: boolean
        minHeight: number
        minWidth: number
        xOffset?: number
        yOffset?: number
        size?: number
        backgroundColor?: string
      }
      
    export interface Instance {
        setOptions: ({
          el,
          mouseControls,
          touchControls,
          gyroControls,
          minHeight,
          minWidth,
          size,
          xOffset,
          yOffset,
          backgroundColor
        }: Omit<ICloudParams, 'el'>) => void
        resize: () => void
        destroy: () => void
      }
    export default clouds2;
}


  
//   declare global {
//     interface Window {
//       VANTA: {
//         HALO: ({
//           el,
//           mouseControls,
//           touchControls,
//           gyroControls,
//           minHeight,
//           minWidth,
//           size,
//           xOffset,
//           yOffset,
//           backgroundColor
//         }: HaloParams) => HaloInstance
//       }
//     }
//   }
  