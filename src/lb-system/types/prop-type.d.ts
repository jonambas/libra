/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

interface PropertyValueTypes {
	aspectRatio: "auto" | "square" | "landscape" | "portrait" | "wide" | "ultrawide" | "golden";
	zIndex: Tokens["zIndex"];
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	inset: "auto" | Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	right: Tokens["spacing"];
	bottom: Tokens["spacing"];
	insetX: Tokens["spacing"] | CssProperties["insetInline"];
	insetY: Tokens["spacing"] | CssProperties["insetBlock"];
	float: "left" | "right" | "start" | "end";
	hideFrom: Tokens["breakpoints"];
	hideBelow: Tokens["breakpoints"];
	flexBasis: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridColumn: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridRow: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	marginLeft: "auto" | Tokens["spacing"];
	marginRight: "auto" | Tokens["spacing"];
	marginTop: "auto" | Tokens["spacing"];
	marginBottom: "auto" | Tokens["spacing"];
	margin: "auto" | Tokens["spacing"];
	marginBlock: "auto" | Tokens["spacing"];
	marginBlockEnd: "auto" | Tokens["spacing"];
	marginBlockStart: "auto" | Tokens["spacing"];
	marginInline: "auto" | Tokens["spacing"];
	marginInlineEnd: "auto" | Tokens["spacing"];
	marginInlineStart: "auto" | Tokens["spacing"];
	outlineWidth: Tokens["borderWidths"];
	outlineColor: Tokens["colors"];
	outline: Tokens["borders"];
	outlineOffset: Tokens["spacing"];
	divideX: string;
	divideY: string;
	divideColor: Tokens["colors"];
	divideStyle: CssProperties["borderStyle"];
	width: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	inlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	blockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textWrap: "wrap" | "balance" | "nowrap";
	truncate: boolean;
	listStyleImage: Tokens["assets"];
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundImage: Tokens["assets"];
	backgroundGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: Tokens["gradients"] | "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderRightRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderBottomRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderLeftRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"] | CssProperties["borderRadius"];
	border: Tokens["borders"];
	borderWidth: Tokens["borderWidths"];
	borderTopWidth: Tokens["borderWidths"];
	borderLeftWidth: Tokens["borderWidths"];
	borderRightWidth: Tokens["borderWidths"];
	borderBottomWidth: Tokens["borderWidths"];
	borderColor: Tokens["colors"];
	borderInline: Tokens["borders"];
	borderInlineWidth: Tokens["borderWidths"];
	borderInlineColor: Tokens["colors"];
	borderBlock: Tokens["borders"];
	borderBlockWidth: Tokens["borderWidths"];
	borderBlockColor: Tokens["colors"];
	borderLeft: Tokens["borders"];
	borderLeftColor: Tokens["colors"];
	borderInlineStart: Tokens["borders"];
	borderInlineStartWidth: Tokens["borderWidths"];
	borderInlineStartColor: Tokens["colors"];
	borderRight: Tokens["borders"];
	borderRightColor: Tokens["colors"];
	borderInlineEnd: Tokens["borders"];
	borderInlineEndWidth: Tokens["borderWidths"];
	borderInlineEndColor: Tokens["colors"];
	borderTop: Tokens["borders"];
	borderTopColor: Tokens["colors"];
	borderBottom: Tokens["borders"];
	borderBottomColor: Tokens["colors"];
	borderBlockEnd: Tokens["borders"];
	borderBlockEndColor: Tokens["colors"];
	borderBlockStart: Tokens["borders"];
	borderBlockStartColor: Tokens["colors"];
	opacity: Tokens["opacity"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	dropShadow: Tokens["dropShadows"];
	blur: Tokens["blurs"];
	backdropFilter: "auto";
	backdropBlur: Tokens["blurs"];
	borderSpacing: Tokens["spacing"];
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transitionTimingFunction: Tokens["easings"];
	transitionDelay: Tokens["durations"];
	transitionDuration: Tokens["durations"];
	transition: "all" | "common" | "background" | "colors" | "opacity" | "shadow" | "transform";
	animation: Tokens["animations"];
	animationName: Tokens["animationName"];
	animationDelay: Tokens["durations"];
	scale: "auto" | CssProperties["scale"];
	translate: "auto" | CssProperties["translate"];
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollbar: "visible" | "hidden";
	scrollMargin: Tokens["spacing"];
	scrollMarginX: Tokens["spacing"] | CssProperties["scrollMarginInline"];
	scrollMarginY: Tokens["spacing"] | CssProperties["scrollMarginBlock"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingX: Tokens["spacing"] | CssProperties["scrollPaddingInline"];
	scrollPaddingY: Tokens["spacing"] | CssProperties["scrollPaddingBlock"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	strokeWidth: Tokens["borderWidths"];
	srOnly: boolean;
	debug: boolean;
	colorPalette: "white" | "black" | "baseBg" | "contentBg" | "borders" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "ruby1" | "ruby2" | "ruby3" | "ruby4" | "ruby5" | "ruby6" | "ruby7" | "ruby8" | "ruby9" | "ruby10" | "ruby11" | "ruby12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "iris1" | "iris2" | "iris3" | "iris4" | "iris5" | "iris6" | "iris7" | "iris8" | "iris9" | "iris10" | "iris11" | "iris12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "jade1" | "jade2" | "jade3" | "jade4" | "jade5" | "jade6" | "jade7" | "jade8" | "jade9" | "jade10" | "jade11" | "jade12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12";
}



  type CssValue<T> = T extends keyof CssProperties ? CssProperties[T] : never

  type Shorthand<T> = T extends keyof PropertyValueTypes ? PropertyValueTypes[T] | CssValue<T> : CssValue<T>

  export interface PropertyTypes extends PropertyValueTypes {
  
	pos: Shorthand<"position">;
	insetEnd: Shorthand<"insetInlineEnd">;
	end: Shorthand<"insetInlineEnd">;
	insetStart: Shorthand<"insetInlineStart">;
	start: Shorthand<"insetInlineStart">;
	flexDir: Shorthand<"flexDirection">;
	p: Shorthand<"padding">;
	pl: Shorthand<"paddingLeft">;
	pr: Shorthand<"paddingRight">;
	pt: Shorthand<"paddingTop">;
	pb: Shorthand<"paddingBottom">;
	py: Shorthand<"paddingBlock">;
	paddingY: Shorthand<"paddingBlock">;
	paddingX: Shorthand<"paddingInline">;
	px: Shorthand<"paddingInline">;
	pe: Shorthand<"paddingInlineEnd">;
	paddingEnd: Shorthand<"paddingInlineEnd">;
	ps: Shorthand<"paddingInlineStart">;
	paddingStart: Shorthand<"paddingInlineStart">;
	ml: Shorthand<"marginLeft">;
	mr: Shorthand<"marginRight">;
	mt: Shorthand<"marginTop">;
	mb: Shorthand<"marginBottom">;
	m: Shorthand<"margin">;
	my: Shorthand<"marginBlock">;
	marginY: Shorthand<"marginBlock">;
	mx: Shorthand<"marginInline">;
	marginX: Shorthand<"marginInline">;
	me: Shorthand<"marginInlineEnd">;
	marginEnd: Shorthand<"marginInlineEnd">;
	ms: Shorthand<"marginInlineStart">;
	marginStart: Shorthand<"marginInlineStart">;
	ringWidth: Shorthand<"outlineWidth">;
	ringColor: Shorthand<"outlineColor">;
	ring: Shorthand<"outline">;
	ringOffset: Shorthand<"outlineOffset">;
	w: Shorthand<"width">;
	minW: Shorthand<"minWidth">;
	maxW: Shorthand<"maxWidth">;
	h: Shorthand<"height">;
	minH: Shorthand<"minHeight">;
	maxH: Shorthand<"maxHeight">;
	bgPosition: Shorthand<"backgroundPosition">;
	bgPositionX: Shorthand<"backgroundPositionX">;
	bgPositionY: Shorthand<"backgroundPositionY">;
	bgAttachment: Shorthand<"backgroundAttachment">;
	bgClip: Shorthand<"backgroundClip">;
	bg: Shorthand<"background">;
	bgColor: Shorthand<"backgroundColor">;
	bgOrigin: Shorthand<"backgroundOrigin">;
	bgImage: Shorthand<"backgroundImage">;
	bgRepeat: Shorthand<"backgroundRepeat">;
	bgBlendMode: Shorthand<"backgroundBlendMode">;
	bgSize: Shorthand<"backgroundSize">;
	bgGradient: Shorthand<"backgroundGradient">;
	rounded: Shorthand<"borderRadius">;
	roundedTopLeft: Shorthand<"borderTopLeftRadius">;
	roundedTopRight: Shorthand<"borderTopRightRadius">;
	roundedBottomRight: Shorthand<"borderBottomRightRadius">;
	roundedBottomLeft: Shorthand<"borderBottomLeftRadius">;
	roundedTop: Shorthand<"borderTopRadius">;
	roundedRight: Shorthand<"borderRightRadius">;
	roundedBottom: Shorthand<"borderBottomRadius">;
	roundedLeft: Shorthand<"borderLeftRadius">;
	roundedStartStart: Shorthand<"borderStartStartRadius">;
	roundedStartEnd: Shorthand<"borderStartEndRadius">;
	roundedStart: Shorthand<"borderStartRadius">;
	roundedEndStart: Shorthand<"borderEndStartRadius">;
	roundedEndEnd: Shorthand<"borderEndEndRadius">;
	roundedEnd: Shorthand<"borderEndRadius">;
	borderX: Shorthand<"borderInline">;
	borderXWidth: Shorthand<"borderInlineWidth">;
	borderXColor: Shorthand<"borderInlineColor">;
	borderY: Shorthand<"borderBlock">;
	borderYWidth: Shorthand<"borderBlockWidth">;
	borderYColor: Shorthand<"borderBlockColor">;
	borderStart: Shorthand<"borderInlineStart">;
	borderStartWidth: Shorthand<"borderInlineStartWidth">;
	borderStartColor: Shorthand<"borderInlineStartColor">;
	borderEnd: Shorthand<"borderInlineEnd">;
	borderEndWidth: Shorthand<"borderInlineEndWidth">;
	borderEndColor: Shorthand<"borderInlineEndColor">;
	shadow: Shorthand<"boxShadow">;
	shadowColor: Shorthand<"boxShadowColor">;
	x: Shorthand<"translateX">;
	y: Shorthand<"translateY">;
}

type StrictableProps =
  | 'alignContent'
  | 'alignItems'
  | 'alignSelf'
  | 'all'
  | 'animationComposition'
  | 'animationDirection'
  | 'animationFillMode'
  | 'appearance'
  | 'backfaceVisibility'
  | 'backgroundAttachment'
  | 'backgroundClip'
  | 'borderCollapse'
  | 'border'
  | 'borderBlock'
  | 'borderBlockEnd'
  | 'borderBlockStart'
  | 'borderBottom'
  | 'borderInline'
  | 'borderInlineEnd'
  | 'borderInlineStart'
  | 'borderLeft'
  | 'borderRight'
  | 'borderTop'
  | 'borderBlockEndStyle'
  | 'borderBlockStartStyle'
  | 'borderBlockStyle'
  | 'borderBottomStyle'
  | 'borderInlineEndStyle'
  | 'borderInlineStartStyle'
  | 'borderInlineStyle'
  | 'borderLeftStyle'
  | 'borderRightStyle'
  | 'borderTopStyle'
  | 'boxDecorationBreak'
  | 'boxSizing'
  | 'breakAfter'
  | 'breakBefore'
  | 'breakInside'
  | 'captionSide'
  | 'clear'
  | 'columnFill'
  | 'columnRuleStyle'
  | 'contentVisibility'
  | 'direction'
  | 'display'
  | 'emptyCells'
  | 'flexDirection'
  | 'flexWrap'
  | 'float'
  | 'fontKerning'
  | 'forcedColorAdjust'
  | 'isolation'
  | 'lineBreak'
  | 'mixBlendMode'
  | 'objectFit'
  | 'outlineStyle'
  | 'overflow'
  | 'overflowX'
  | 'overflowY'
  | 'overflowBlock'
  | 'overflowInline'
  | 'overflowWrap'
  | 'pointerEvents'
  | 'position'
  | 'resize'
  | 'scrollBehavior'
  | 'touchAction'
  | 'transformBox'
  | 'transformStyle'
  | 'userSelect'
  | 'visibility'
  | 'wordBreak'
  | 'writingMode'
type WithEscapeHatch<T> = T | `[${string}]`
type FilterVagueString<Key, Value> = Value extends boolean
  ? Value
  : Key extends StrictableProps
    ? Value extends `${infer _}` ? Value : never
    : Value
type PropOrCondition<Key, Value> = ConditionalValue<Value | (string & {})>

type PropertyTypeValue<T extends string> = T extends keyof PropertyTypes
  ? PropOrCondition<T, PropertyTypes[T] | CssValue<T>>
  : never;

type CssPropertyValue<T extends string> = T extends keyof CssProperties
  ? PropOrCondition<T, CssProperties[T]>
  : never;

export type PropertyValue<T extends string> = T extends keyof PropertyTypes
  ? PropertyTypeValue<T>
  : T extends keyof CssProperties
    ? CssPropertyValue<T>
    : PropOrCondition<T, string | number>