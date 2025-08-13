import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default: 'bg-gray-800 text-white shadow-xs hover:bg-gray-700',
				destructive: 'bg-red-600 text-white shadow-xs hover:bg-red-500',
				outline: 'border border-gray-400 bg-white shadow-xs hover:bg-gray-100 text-gray-800',
				secondary: 'bg-yellow-500 text-gray-900 shadow-xs hover:bg-yellow-400',
				ghost: 'hover:bg-gray-100 text-gray-800',
				link: 'text-gray-800 underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-9 p-4 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);
