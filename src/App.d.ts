declare namespace App {
	// Component Types
	// ---------------------------------------------------------------------------

	// Base Types
	type Component<P extends Props = Props> = (props: P) => JSX.Element
	interface Props {
		children?: React.ReactNode
		className?: string
		styles?: {[index: string]: string}
	}

	// Anchor Component (/src/components/anchor)
	type AnchorComponent = Component<AnchorProps>
	interface AnchorProps extends Props {
		href?: string
		exact?: boolean
		shallow?: boolean
		activeClassName?: string
	}

	// Box Component (/src/components/box)
	interface BoxComponent extends Component<BoxProps> {
		Heading: BoxHeadingComponent
	}
	type BoxHeadingComponent = Component<HeadingProps>
	type BoxProps = Props

	// Button Component (/src/components/button)
	type ButtonComponent = Component<ButtonProps>
	interface ButtonProps extends Props {
		color?: string
		size?: SizeEnum
		handle?: () => void
		disabled?: boolean
	}

	// Card Component (/src/components/card)
	interface CardComponent extends Component<CardProps> {
		Image: CardImageComponent
		Heading: CardHeadingComponent
		Content: CardContentComponent
		Meta: CardMetaComponent
	}
	type CardImageComponent = Component<ImageProps>
	type CardHeadingComponent = Component<HeadingProps>
	type CardContentComponent = Component<ContentProps>
	type CardMetaComponent = Component<GroupProps>
	interface CardProps extends Props {
		href?: AnchorProps
	}

	// Cloud Component (/src/components/cloud)
	type CloudComponent = Component<CloudProps>
	interface CloudProps extends Props {
		cloud: [string, number][]
	}

	// Code Component (/src/components/code)
	type CodeComponent = Component<CodeProps>
	type CodeProps = Props

	// Content Component (/src/components/content)
	interface ContentComponent extends Component<ContentProps> {
		Code: ContentCodeComponent
		Image: ContentImageComponent
		Heading: ContentHeadingComponent
		Paragraph: ContentParagraphComponent
	}
	type ContentCodeComponent = Component<CodeProps>
	type ContentImageComponent = Component<ImageProps>
	type ContentHeadingComponent = Component<HeadingProps>
	type ContentParagraphComponent = Component<TextProps>
	type ContentPropsComponent = Props

	type DropdownComponent = Component<DropdownProps>
	interface DropdownProps extends Props {
		data: string[]
		label: string
		baseUrl: string
	}

	// Form Component (/src/components/form)
	type FormContainer = Component<FormContainerProps>
	type FormComponent = Component<FormComponentProps>
	interface FormContainerProps extends Props {
		action: string
		method?: FormMethodEnum
		name?: string
		schema: InputSchema<unkown>[]
		successNotification?: NotificationsSchema<'success'>
		errorNotification?: NotificationsSchema<'danger'>
		button?: ButtonProps & {label: string}
	}
	interface FormComponentProps extends Props {
		state: boolean
		attempted: boolean
		handle: (name: string, status: boolean) => void
		schema: InputSchema<unknown>
	}

	// Group Component (/src/components/group)
	type GroupComponent = Component<GroupProps>
	type GroupProps = Props

	// Grid Component (/src/components/grid)
	type GridComponent = Component<GridProps>
	interface GridProps<T extends Schema> extends Props {
		data: T[]
		template: (data: T) => React.ReactNode
		baseUrl: string
	}

	// Heading Component (/src/components/heading)
	interface HeadingComponent extends Component<HeadingProps> {
		H1: SpecificHeadingComponent
		H2: SpecificHeadingComponent
		H3: SpecificHeadingComponent
		H4: SpecificHeadingComponent
		H5: SpecificHeadingComponent
		H6: SpecificHeadingComponent
	}
	type SpecificHeadingComponent = Component
	interface HeadingProps extends Props {
		level?: 1 | 2 | 3 | 4 | 5 | 6
	}

	// Hero Component (/src/components/hero)
	interface HeroComponent extends Component<HeroProps> {
		Heading: HeroHeadingComponent
		SubHeading: HeroSubHeadingComponent
	}
	type HeroHeadingComponent = Component<HeadingProps>
	type HeroSubHeadingComponent = Component<TextProps>
	interface HeroProps extends Props {
		effect?: string
	}

	// Icon Component (/src/components/icon)
	type IconComponent = Component<IconProps>
	interface IconProps extends Props {
		type: string
		size?: Size
	}

	// Image Component (/src/components/image)
	type ImageComponent = Component<ImageProps>
	interface ImageProps extends Props {
		src: string
		height?: string
		width?: string
		alt?: string
		caption?: string
		lightbox?: boolean
	}

	// Instagram Component (/src/components/instagram)
	type InstagramComponent = Component<InstagramProps>
	type InstagramProps = Props

	// LoadBar Component (/src/components/loadbar)
	type LoadBarComponent = Component<LoadBarProps>
	type LoadBarProps = Props

	// Map Component (/src/components/map)
	type MapComponent = Component<MapProps>
	type MapProps = Props

	// Modal Component (/src/components/modal)
	type ModalComponent = Component<ModalProps>
	type ModalProps = Props

	// Nav Component (/src/components/nav)
	interface NavComponent extends Component<NavProps> {
		Logo: NavLogoComponent
		Menu: NavMenuComponent
		Link: NavLinkComponent
	}
	type NavLogoComponent = Component<ImageProps>
	type NavMenuComponent = Component<GroupProps>
	type NavLinkComponent = Component<AnchorProps>
	type NavPropsComponent = Props

	// PageTitle Component (/src/components/pagetitle)
	type PageTitleComponent = Component<PageTitleProps>
	interface PageTitleProps extends Props {
		title: string
		description?: string
		image?: string
	}

	// Pagination Component (/src/components/pagination)
	type PaginationComponent = Component<PaginationProps>
	interface PaginationProps extends Props {
		currentPage: number
		pageCount: number
		baseUrl: string
	}

	// Pill Component (/src/components/pill)
	type PillComponent = Component<PillProps>
	interface PillProps extends Props {
		label: string
		href?: AnchorProps
		icon?: IconProps
	}

	// Seo Component (/src/components/seo)
	type SeoComponent = Component<SeoProps>
	interface SeoProps extends Props {
		title?: string
		description?: string
		image?: string
	}

	// Seperator Component (/src/components/seperator)
	type SeperatorComponent = Component<SeperatorProps>
	type SeperatorProps = Props

	// Slide Component (/src/components/slide)
	type SlideComponent = Component<SlideProps>
	interface SlideProps extends Props {
		name: string
		quote?: string
		source?: string
	}

	// Tabs Component (/src/components/tabs)
	interface TabsComponent extends Component<TabsProps> {
		Tab: TabsTabComponent
	}
	type TabsTabComponent = Component<TabsTabProps>
	type TabsProps = Props
	interface TabsTabProps extends Props {
		title: string
		initial?: boolean
	}

	// Text Component (/src/components/text)
	type TextComponent = Component<TextProps>
	interface TextProps extends Props {
		element?: keyof JSX.IntrinsicElements
	}

	// Toast Component (/src/components/toast)
	type Toast = ToastContainer
	type ToastContainer = C<Record<string, never>>
	type ToastComponent = C<NotificationsSchema<ContextualClassEnum>>

	// Resource Types
	// ---------------------------------------------------------------------------

	interface MarkdownResource {
		content: string
		slug: string
		[index: string]: string | string[]
	}

	interface ArticleResource extends MarkdownResource {
		title: string
		summary: string
		image?: string
		featured: boolean
		category: string
		tags: string[]
	}

	interface ProjectResource extends MarkdownResource {
		title: string
		summary: string
		image?: string
		category: string
		attributes: {
			label: string
			href?: string
			icon?: string
		}
	}

	// Schema Types
	// ---------------------------------------------------------------------------

	interface NotificationsSchema<C> {
		id?: number
		message: string
		type: C
	}

	interface InputSchema {
		type: InputTypeEnum
		name: string
		label?: string
		placeholder?: string
		validator?: (val: string) => boolean
	}

	interface MenuSchema {
		name: string
		href: string
		exact?: boolean
		activeClassName?: string
	}

	// Context Types
	// ---------------------------------------------------------------------------

	// Base Types
	type Context<T> = React.Context<T | undefined>
	type Reducer<S, A extends Action> = React.Reducer<S, A>
	type Dispatch<A extends Action> = React.Dispatch<A>
	interface Action<P> {
		name: string
		payload: P
	}
	interface Provider<S, A extends Action> {
		state: S
		dispatch: Dispatch<A>
	}

	// Api Context
	type ApiContext = Context<AppContextProvider>
	type ApiResource = {[index: string]: MarkdownResource}
	type ApiContextState = ApiResource[]
	type ApiContextAction = Action<ApiResource>
	type ApiContextReducer = Reducer<ApiContextState, ApiContextAction>
	type ApiContextProvider = Provider<ApiContextState, ApiContextAction>

	// Components Context
	type ComponentsContext = Context<ComponentsContextState>
	interface ComponentsContextState {
		[index: string]: any
	}

	// Notifications Context
	type NotificationsContext = Context<NotificationsContextProvider>
	type NotificationsResource = NotificationsSchema<ContextualClassEnum>
	type NotificationsContextState = NotificationsResource[]
	type NotificationsContextAction = Action<NotificationsResource>
	type NotificationsContextReducer = Reducer<NotificationsContextState, NotificationsContextAction>
	type NotificationsContextProvider = Provider<
		NotificationsContextState,
		NotificationsContextAction
	>

	// Enumeration Types
	// ---------------------------------------------------------------------------

	type ContextualClassEnum = 'info' | 'success' | 'warning' | 'danger'

	type SizeEnum = 'sm' | 'md' | 'lg'

	type DirectionEnum = 'column' | 'row'

	type HorizontalAlignmentEnum = 'left' | 'right'

	type FormMethodEnum = 'GET' | 'POST' | 'PUT' | 'DELETE'

	type InputTypeEnum =
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| 'textarea'

	// Style Theme
	// ---------------------------------------------------------------------------
	interface Theme {
		pallete: {
			[index: string]: string
		}
		sizes: {
			[index: string]: string
		}
		space: {
			[index: string]: string
		}
		breakpoints: {
			[index: string]: number
		}
		styles: {
			boxShadow?: string
			borderRadius?: string
			fontFamily?: string
			[index: string]: string | number
		}
		[index: string]: {
			[index: string]: string | number | Record<string, unknown>
		}
	}

	interface MediaQuery {
		check: (breakpoint: string) => boolean
		from: (breakpoint: string) => string
		until: (breakpoint: string, append?: boolean) => string
		between: (from: string, to: string) => string
	}

	// Api Types
	// ---------------------------------------------------------------------------

	type GetSlugs = (resource: string) => string[]
	type Get = (file: string, resource: string) => MarkdownResource
	type GetAll = (resource: string) => MarkdownResource[]

	// Page Types
	// -------------------------------------------------------------------------------

	type BlogPage = ({articles}: {articles: App.ArticleResource[]}) => JSX.Element

	type SinglePage = ({
		source,
		frontMatter
	}: {
		source: MdxRemote.Source
		frontMatter: MarkdownResource
	}) => JSX.Element

	type PortfolioPage = ({
		projects,
		categories
	}: {
		projects: ProjectResource[]
		categories: string[]
	}) => JSX.Element
}
