import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
export const ourButton= cva("p-2",{
    variants:{
        types:{
           circle:"w-12 h-12 rounded-full" ,
           rectangle:"rounded-full m-2 p-3 "
        }

    }
})

type buttonProps=VariantProps<typeof ourButton>&ComponentProps<"button">&{
    children:ReactNode
}
export function Button({types,className,children}:buttonProps){
    return(
        <button className={twMerge(ourButton({types}),className)}>
            {children}
        </button>
    )
}