// import { SelectButton } from "primereact/selectbutton"
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form"
// import { Input } from "../ui/input"

// type Props = {
//   form: any
//   input: any
//   extraProps: any
// }

// export const CustomFormField = ({ input, form, extraProps }: Props) => {
//   return (
//     <FormField
//       control={form.control}
//       name={input.name}
//       render={({ field }) => (
//         <FormItem className="w-full max-sm:w-full max-sm:text-start flex items-center">
//           <FormLabel className="text-primary/60">{input.text}</FormLabel>
//           <FormControl className="flex-grow">
//             {input.componentType === "SelectButton" ? (
//               <SelectButton
//                 {...field}
//                 value={extraProps[input.name]?.value ? "Yes" : "No"}
//                 onChange={(e) => {
//                   const selectedValue = e.value === "Yes"
//                   extraProps[input.name]?.setValue(selectedValue)
//                   field.onChange(selectedValue)
//                 }}
//                 pt={{ button: { className: "w-full border space-y-4" } }}
//                 options={extraProps.options}
//               />
//             ) : (
//               <Input
//                 {...field}
//                 type={input.type}
//                 disabled={input.disabled || false}
//                 value={String(field.value)}
//                 className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
//               />
//             )}
//           </FormControl>
//           {input.showButton && (
//             <ButtonPrime
//               tooltip="Generate Coupon Code"
//               type="button"
//               color="secondary"
//               severity="secondary"
//               icon={<Code2Icon />}
//               className="flex-[0_1_5rem] h-10 ml-2 border bg-secondary"
//             />
//           )}
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   )
// }
