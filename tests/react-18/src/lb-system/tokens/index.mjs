const tokens = {
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--lb-colors-white)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--lb-colors-black)"
  },
  "spacing.1": {
    "value": "1px",
    "variable": "var(--lb-spacing-1)"
  },
  "spacing.2": {
    "value": "0.125rem",
    "variable": "var(--lb-spacing-2)"
  },
  "spacing.3": {
    "value": "0.25rem",
    "variable": "var(--lb-spacing-3)"
  },
  "spacing.4": {
    "value": "0.5rem",
    "variable": "var(--lb-spacing-4)"
  },
  "spacing.5": {
    "value": "0.75rem",
    "variable": "var(--lb-spacing-5)"
  },
  "spacing.6": {
    "value": "1rem",
    "variable": "var(--lb-spacing-6)"
  },
  "spacing.7": {
    "value": "1.5rem",
    "variable": "var(--lb-spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--lb-spacing-8)"
  },
  "spacing.9": {
    "value": "3rem",
    "variable": "var(--lb-spacing-9)"
  },
  "spacing.10": {
    "value": "4rem",
    "variable": "var(--lb-spacing-10)"
  },
  "fontSizes.0": {
    "value": "0.5rem",
    "variable": "var(--lb-font-sizes-0)"
  },
  "fontSizes.1": {
    "value": "0.625rem",
    "variable": "var(--lb-font-sizes-1)"
  },
  "fontSizes.2": {
    "value": "0.6875rem",
    "variable": "var(--lb-font-sizes-2)"
  },
  "fontSizes.3": {
    "value": "0.75rem",
    "variable": "var(--lb-font-sizes-3)"
  },
  "fontSizes.4": {
    "value": "0.8125rem",
    "variable": "var(--lb-font-sizes-4)"
  },
  "fontSizes.5": {
    "value": "0.875rem",
    "variable": "var(--lb-font-sizes-5)"
  },
  "fontSizes.6": {
    "value": "1rem",
    "variable": "var(--lb-font-sizes-6)"
  },
  "fontSizes.7": {
    "value": "1.125rem",
    "variable": "var(--lb-font-sizes-7)"
  },
  "fontSizes.8": {
    "value": "1.25rem",
    "variable": "var(--lb-font-sizes-8)"
  },
  "fontSizes.9": {
    "value": "1.5rem",
    "variable": "var(--lb-font-sizes-9)"
  },
  "fontSizes.10": {
    "value": "2rem",
    "variable": "var(--lb-font-sizes-10)"
  },
  "fontSizes.11": {
    "value": "2.5rem",
    "variable": "var(--lb-font-sizes-11)"
  },
  "fontSizes.12": {
    "value": "3rem",
    "variable": "var(--lb-font-sizes-12)"
  },
  "radii.xs": {
    "value": "3px",
    "variable": "var(--lb-radii-xs)"
  },
  "radii.sm": {
    "value": "6px",
    "variable": "var(--lb-radii-sm)"
  },
  "radii.md": {
    "value": "8px",
    "variable": "var(--lb-radii-md)"
  },
  "radii.xl": {
    "value": "15px",
    "variable": "var(--lb-radii-xl)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--lb-font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--lb-font-weights-medium)"
  },
  "fontWeights.bold": {
    "value": "600",
    "variable": "var(--lb-font-weights-bold)"
  },
  "fonts.sans": {
    "value": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif",
    "variable": "var(--lb-fonts-sans)"
  },
  "fonts.mono": {
    "value": "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace",
    "variable": "var(--lb-fonts-mono)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--lb-breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--lb-breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--lb-breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--lb-breakpoints-xl)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--lb-sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--lb-sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--lb-sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--lb-sizes-breakpoint-xl)"
  },
  "colors.baseBg": {
    "value": "var(--lb-colors-base-bg)",
    "variable": "var(--lb-colors-base-bg)"
  },
  "colors.contentBg": {
    "value": "var(--lb-colors-content-bg)",
    "variable": "var(--lb-colors-content-bg)"
  },
  "colors.borders": {
    "value": "var(--lb-colors-borders)",
    "variable": "var(--lb-colors-borders)"
  },
  "colors.gray1": {
    "value": "var(--lb-colors-gray1)",
    "variable": "var(--lb-colors-gray1)"
  },
  "colors.gray2": {
    "value": "var(--lb-colors-gray2)",
    "variable": "var(--lb-colors-gray2)"
  },
  "colors.gray3": {
    "value": "var(--lb-colors-gray3)",
    "variable": "var(--lb-colors-gray3)"
  },
  "colors.gray4": {
    "value": "var(--lb-colors-gray4)",
    "variable": "var(--lb-colors-gray4)"
  },
  "colors.gray5": {
    "value": "var(--lb-colors-gray5)",
    "variable": "var(--lb-colors-gray5)"
  },
  "colors.gray6": {
    "value": "var(--lb-colors-gray6)",
    "variable": "var(--lb-colors-gray6)"
  },
  "colors.gray7": {
    "value": "var(--lb-colors-gray7)",
    "variable": "var(--lb-colors-gray7)"
  },
  "colors.gray8": {
    "value": "var(--lb-colors-gray8)",
    "variable": "var(--lb-colors-gray8)"
  },
  "colors.gray9": {
    "value": "var(--lb-colors-gray9)",
    "variable": "var(--lb-colors-gray9)"
  },
  "colors.gray10": {
    "value": "var(--lb-colors-gray10)",
    "variable": "var(--lb-colors-gray10)"
  },
  "colors.gray11": {
    "value": "var(--lb-colors-gray11)",
    "variable": "var(--lb-colors-gray11)"
  },
  "colors.gray12": {
    "value": "var(--lb-colors-gray12)",
    "variable": "var(--lb-colors-gray12)"
  },
  "colors.gold1": {
    "value": "var(--lb-colors-gold1)",
    "variable": "var(--lb-colors-gold1)"
  },
  "colors.gold2": {
    "value": "var(--lb-colors-gold2)",
    "variable": "var(--lb-colors-gold2)"
  },
  "colors.gold3": {
    "value": "var(--lb-colors-gold3)",
    "variable": "var(--lb-colors-gold3)"
  },
  "colors.gold4": {
    "value": "var(--lb-colors-gold4)",
    "variable": "var(--lb-colors-gold4)"
  },
  "colors.gold5": {
    "value": "var(--lb-colors-gold5)",
    "variable": "var(--lb-colors-gold5)"
  },
  "colors.gold6": {
    "value": "var(--lb-colors-gold6)",
    "variable": "var(--lb-colors-gold6)"
  },
  "colors.gold7": {
    "value": "var(--lb-colors-gold7)",
    "variable": "var(--lb-colors-gold7)"
  },
  "colors.gold8": {
    "value": "var(--lb-colors-gold8)",
    "variable": "var(--lb-colors-gold8)"
  },
  "colors.gold9": {
    "value": "var(--lb-colors-gold9)",
    "variable": "var(--lb-colors-gold9)"
  },
  "colors.gold10": {
    "value": "var(--lb-colors-gold10)",
    "variable": "var(--lb-colors-gold10)"
  },
  "colors.gold11": {
    "value": "var(--lb-colors-gold11)",
    "variable": "var(--lb-colors-gold11)"
  },
  "colors.gold12": {
    "value": "var(--lb-colors-gold12)",
    "variable": "var(--lb-colors-gold12)"
  },
  "colors.bronze1": {
    "value": "var(--lb-colors-bronze1)",
    "variable": "var(--lb-colors-bronze1)"
  },
  "colors.bronze2": {
    "value": "var(--lb-colors-bronze2)",
    "variable": "var(--lb-colors-bronze2)"
  },
  "colors.bronze3": {
    "value": "var(--lb-colors-bronze3)",
    "variable": "var(--lb-colors-bronze3)"
  },
  "colors.bronze4": {
    "value": "var(--lb-colors-bronze4)",
    "variable": "var(--lb-colors-bronze4)"
  },
  "colors.bronze5": {
    "value": "var(--lb-colors-bronze5)",
    "variable": "var(--lb-colors-bronze5)"
  },
  "colors.bronze6": {
    "value": "var(--lb-colors-bronze6)",
    "variable": "var(--lb-colors-bronze6)"
  },
  "colors.bronze7": {
    "value": "var(--lb-colors-bronze7)",
    "variable": "var(--lb-colors-bronze7)"
  },
  "colors.bronze8": {
    "value": "var(--lb-colors-bronze8)",
    "variable": "var(--lb-colors-bronze8)"
  },
  "colors.bronze9": {
    "value": "var(--lb-colors-bronze9)",
    "variable": "var(--lb-colors-bronze9)"
  },
  "colors.bronze10": {
    "value": "var(--lb-colors-bronze10)",
    "variable": "var(--lb-colors-bronze10)"
  },
  "colors.bronze11": {
    "value": "var(--lb-colors-bronze11)",
    "variable": "var(--lb-colors-bronze11)"
  },
  "colors.bronze12": {
    "value": "var(--lb-colors-bronze12)",
    "variable": "var(--lb-colors-bronze12)"
  },
  "colors.brown1": {
    "value": "var(--lb-colors-brown1)",
    "variable": "var(--lb-colors-brown1)"
  },
  "colors.brown2": {
    "value": "var(--lb-colors-brown2)",
    "variable": "var(--lb-colors-brown2)"
  },
  "colors.brown3": {
    "value": "var(--lb-colors-brown3)",
    "variable": "var(--lb-colors-brown3)"
  },
  "colors.brown4": {
    "value": "var(--lb-colors-brown4)",
    "variable": "var(--lb-colors-brown4)"
  },
  "colors.brown5": {
    "value": "var(--lb-colors-brown5)",
    "variable": "var(--lb-colors-brown5)"
  },
  "colors.brown6": {
    "value": "var(--lb-colors-brown6)",
    "variable": "var(--lb-colors-brown6)"
  },
  "colors.brown7": {
    "value": "var(--lb-colors-brown7)",
    "variable": "var(--lb-colors-brown7)"
  },
  "colors.brown8": {
    "value": "var(--lb-colors-brown8)",
    "variable": "var(--lb-colors-brown8)"
  },
  "colors.brown9": {
    "value": "var(--lb-colors-brown9)",
    "variable": "var(--lb-colors-brown9)"
  },
  "colors.brown10": {
    "value": "var(--lb-colors-brown10)",
    "variable": "var(--lb-colors-brown10)"
  },
  "colors.brown11": {
    "value": "var(--lb-colors-brown11)",
    "variable": "var(--lb-colors-brown11)"
  },
  "colors.brown12": {
    "value": "var(--lb-colors-brown12)",
    "variable": "var(--lb-colors-brown12)"
  },
  "colors.yellow1": {
    "value": "var(--lb-colors-yellow1)",
    "variable": "var(--lb-colors-yellow1)"
  },
  "colors.yellow2": {
    "value": "var(--lb-colors-yellow2)",
    "variable": "var(--lb-colors-yellow2)"
  },
  "colors.yellow3": {
    "value": "var(--lb-colors-yellow3)",
    "variable": "var(--lb-colors-yellow3)"
  },
  "colors.yellow4": {
    "value": "var(--lb-colors-yellow4)",
    "variable": "var(--lb-colors-yellow4)"
  },
  "colors.yellow5": {
    "value": "var(--lb-colors-yellow5)",
    "variable": "var(--lb-colors-yellow5)"
  },
  "colors.yellow6": {
    "value": "var(--lb-colors-yellow6)",
    "variable": "var(--lb-colors-yellow6)"
  },
  "colors.yellow7": {
    "value": "var(--lb-colors-yellow7)",
    "variable": "var(--lb-colors-yellow7)"
  },
  "colors.yellow8": {
    "value": "var(--lb-colors-yellow8)",
    "variable": "var(--lb-colors-yellow8)"
  },
  "colors.yellow9": {
    "value": "var(--lb-colors-yellow9)",
    "variable": "var(--lb-colors-yellow9)"
  },
  "colors.yellow10": {
    "value": "var(--lb-colors-yellow10)",
    "variable": "var(--lb-colors-yellow10)"
  },
  "colors.yellow11": {
    "value": "var(--lb-colors-yellow11)",
    "variable": "var(--lb-colors-yellow11)"
  },
  "colors.yellow12": {
    "value": "var(--lb-colors-yellow12)",
    "variable": "var(--lb-colors-yellow12)"
  },
  "colors.amber1": {
    "value": "var(--lb-colors-amber1)",
    "variable": "var(--lb-colors-amber1)"
  },
  "colors.amber2": {
    "value": "var(--lb-colors-amber2)",
    "variable": "var(--lb-colors-amber2)"
  },
  "colors.amber3": {
    "value": "var(--lb-colors-amber3)",
    "variable": "var(--lb-colors-amber3)"
  },
  "colors.amber4": {
    "value": "var(--lb-colors-amber4)",
    "variable": "var(--lb-colors-amber4)"
  },
  "colors.amber5": {
    "value": "var(--lb-colors-amber5)",
    "variable": "var(--lb-colors-amber5)"
  },
  "colors.amber6": {
    "value": "var(--lb-colors-amber6)",
    "variable": "var(--lb-colors-amber6)"
  },
  "colors.amber7": {
    "value": "var(--lb-colors-amber7)",
    "variable": "var(--lb-colors-amber7)"
  },
  "colors.amber8": {
    "value": "var(--lb-colors-amber8)",
    "variable": "var(--lb-colors-amber8)"
  },
  "colors.amber9": {
    "value": "var(--lb-colors-amber9)",
    "variable": "var(--lb-colors-amber9)"
  },
  "colors.amber10": {
    "value": "var(--lb-colors-amber10)",
    "variable": "var(--lb-colors-amber10)"
  },
  "colors.amber11": {
    "value": "var(--lb-colors-amber11)",
    "variable": "var(--lb-colors-amber11)"
  },
  "colors.amber12": {
    "value": "var(--lb-colors-amber12)",
    "variable": "var(--lb-colors-amber12)"
  },
  "colors.orange1": {
    "value": "var(--lb-colors-orange1)",
    "variable": "var(--lb-colors-orange1)"
  },
  "colors.orange2": {
    "value": "var(--lb-colors-orange2)",
    "variable": "var(--lb-colors-orange2)"
  },
  "colors.orange3": {
    "value": "var(--lb-colors-orange3)",
    "variable": "var(--lb-colors-orange3)"
  },
  "colors.orange4": {
    "value": "var(--lb-colors-orange4)",
    "variable": "var(--lb-colors-orange4)"
  },
  "colors.orange5": {
    "value": "var(--lb-colors-orange5)",
    "variable": "var(--lb-colors-orange5)"
  },
  "colors.orange6": {
    "value": "var(--lb-colors-orange6)",
    "variable": "var(--lb-colors-orange6)"
  },
  "colors.orange7": {
    "value": "var(--lb-colors-orange7)",
    "variable": "var(--lb-colors-orange7)"
  },
  "colors.orange8": {
    "value": "var(--lb-colors-orange8)",
    "variable": "var(--lb-colors-orange8)"
  },
  "colors.orange9": {
    "value": "var(--lb-colors-orange9)",
    "variable": "var(--lb-colors-orange9)"
  },
  "colors.orange10": {
    "value": "var(--lb-colors-orange10)",
    "variable": "var(--lb-colors-orange10)"
  },
  "colors.orange11": {
    "value": "var(--lb-colors-orange11)",
    "variable": "var(--lb-colors-orange11)"
  },
  "colors.orange12": {
    "value": "var(--lb-colors-orange12)",
    "variable": "var(--lb-colors-orange12)"
  },
  "colors.tomato1": {
    "value": "var(--lb-colors-tomato1)",
    "variable": "var(--lb-colors-tomato1)"
  },
  "colors.tomato2": {
    "value": "var(--lb-colors-tomato2)",
    "variable": "var(--lb-colors-tomato2)"
  },
  "colors.tomato3": {
    "value": "var(--lb-colors-tomato3)",
    "variable": "var(--lb-colors-tomato3)"
  },
  "colors.tomato4": {
    "value": "var(--lb-colors-tomato4)",
    "variable": "var(--lb-colors-tomato4)"
  },
  "colors.tomato5": {
    "value": "var(--lb-colors-tomato5)",
    "variable": "var(--lb-colors-tomato5)"
  },
  "colors.tomato6": {
    "value": "var(--lb-colors-tomato6)",
    "variable": "var(--lb-colors-tomato6)"
  },
  "colors.tomato7": {
    "value": "var(--lb-colors-tomato7)",
    "variable": "var(--lb-colors-tomato7)"
  },
  "colors.tomato8": {
    "value": "var(--lb-colors-tomato8)",
    "variable": "var(--lb-colors-tomato8)"
  },
  "colors.tomato9": {
    "value": "var(--lb-colors-tomato9)",
    "variable": "var(--lb-colors-tomato9)"
  },
  "colors.tomato10": {
    "value": "var(--lb-colors-tomato10)",
    "variable": "var(--lb-colors-tomato10)"
  },
  "colors.tomato11": {
    "value": "var(--lb-colors-tomato11)",
    "variable": "var(--lb-colors-tomato11)"
  },
  "colors.tomato12": {
    "value": "var(--lb-colors-tomato12)",
    "variable": "var(--lb-colors-tomato12)"
  },
  "colors.red1": {
    "value": "var(--lb-colors-red1)",
    "variable": "var(--lb-colors-red1)"
  },
  "colors.red2": {
    "value": "var(--lb-colors-red2)",
    "variable": "var(--lb-colors-red2)"
  },
  "colors.red3": {
    "value": "var(--lb-colors-red3)",
    "variable": "var(--lb-colors-red3)"
  },
  "colors.red4": {
    "value": "var(--lb-colors-red4)",
    "variable": "var(--lb-colors-red4)"
  },
  "colors.red5": {
    "value": "var(--lb-colors-red5)",
    "variable": "var(--lb-colors-red5)"
  },
  "colors.red6": {
    "value": "var(--lb-colors-red6)",
    "variable": "var(--lb-colors-red6)"
  },
  "colors.red7": {
    "value": "var(--lb-colors-red7)",
    "variable": "var(--lb-colors-red7)"
  },
  "colors.red8": {
    "value": "var(--lb-colors-red8)",
    "variable": "var(--lb-colors-red8)"
  },
  "colors.red9": {
    "value": "var(--lb-colors-red9)",
    "variable": "var(--lb-colors-red9)"
  },
  "colors.red10": {
    "value": "var(--lb-colors-red10)",
    "variable": "var(--lb-colors-red10)"
  },
  "colors.red11": {
    "value": "var(--lb-colors-red11)",
    "variable": "var(--lb-colors-red11)"
  },
  "colors.red12": {
    "value": "var(--lb-colors-red12)",
    "variable": "var(--lb-colors-red12)"
  },
  "colors.ruby1": {
    "value": "var(--lb-colors-ruby1)",
    "variable": "var(--lb-colors-ruby1)"
  },
  "colors.ruby2": {
    "value": "var(--lb-colors-ruby2)",
    "variable": "var(--lb-colors-ruby2)"
  },
  "colors.ruby3": {
    "value": "var(--lb-colors-ruby3)",
    "variable": "var(--lb-colors-ruby3)"
  },
  "colors.ruby4": {
    "value": "var(--lb-colors-ruby4)",
    "variable": "var(--lb-colors-ruby4)"
  },
  "colors.ruby5": {
    "value": "var(--lb-colors-ruby5)",
    "variable": "var(--lb-colors-ruby5)"
  },
  "colors.ruby6": {
    "value": "var(--lb-colors-ruby6)",
    "variable": "var(--lb-colors-ruby6)"
  },
  "colors.ruby7": {
    "value": "var(--lb-colors-ruby7)",
    "variable": "var(--lb-colors-ruby7)"
  },
  "colors.ruby8": {
    "value": "var(--lb-colors-ruby8)",
    "variable": "var(--lb-colors-ruby8)"
  },
  "colors.ruby9": {
    "value": "var(--lb-colors-ruby9)",
    "variable": "var(--lb-colors-ruby9)"
  },
  "colors.ruby10": {
    "value": "var(--lb-colors-ruby10)",
    "variable": "var(--lb-colors-ruby10)"
  },
  "colors.ruby11": {
    "value": "var(--lb-colors-ruby11)",
    "variable": "var(--lb-colors-ruby11)"
  },
  "colors.ruby12": {
    "value": "var(--lb-colors-ruby12)",
    "variable": "var(--lb-colors-ruby12)"
  },
  "colors.crimson1": {
    "value": "var(--lb-colors-crimson1)",
    "variable": "var(--lb-colors-crimson1)"
  },
  "colors.crimson2": {
    "value": "var(--lb-colors-crimson2)",
    "variable": "var(--lb-colors-crimson2)"
  },
  "colors.crimson3": {
    "value": "var(--lb-colors-crimson3)",
    "variable": "var(--lb-colors-crimson3)"
  },
  "colors.crimson4": {
    "value": "var(--lb-colors-crimson4)",
    "variable": "var(--lb-colors-crimson4)"
  },
  "colors.crimson5": {
    "value": "var(--lb-colors-crimson5)",
    "variable": "var(--lb-colors-crimson5)"
  },
  "colors.crimson6": {
    "value": "var(--lb-colors-crimson6)",
    "variable": "var(--lb-colors-crimson6)"
  },
  "colors.crimson7": {
    "value": "var(--lb-colors-crimson7)",
    "variable": "var(--lb-colors-crimson7)"
  },
  "colors.crimson8": {
    "value": "var(--lb-colors-crimson8)",
    "variable": "var(--lb-colors-crimson8)"
  },
  "colors.crimson9": {
    "value": "var(--lb-colors-crimson9)",
    "variable": "var(--lb-colors-crimson9)"
  },
  "colors.crimson10": {
    "value": "var(--lb-colors-crimson10)",
    "variable": "var(--lb-colors-crimson10)"
  },
  "colors.crimson11": {
    "value": "var(--lb-colors-crimson11)",
    "variable": "var(--lb-colors-crimson11)"
  },
  "colors.crimson12": {
    "value": "var(--lb-colors-crimson12)",
    "variable": "var(--lb-colors-crimson12)"
  },
  "colors.pink1": {
    "value": "var(--lb-colors-pink1)",
    "variable": "var(--lb-colors-pink1)"
  },
  "colors.pink2": {
    "value": "var(--lb-colors-pink2)",
    "variable": "var(--lb-colors-pink2)"
  },
  "colors.pink3": {
    "value": "var(--lb-colors-pink3)",
    "variable": "var(--lb-colors-pink3)"
  },
  "colors.pink4": {
    "value": "var(--lb-colors-pink4)",
    "variable": "var(--lb-colors-pink4)"
  },
  "colors.pink5": {
    "value": "var(--lb-colors-pink5)",
    "variable": "var(--lb-colors-pink5)"
  },
  "colors.pink6": {
    "value": "var(--lb-colors-pink6)",
    "variable": "var(--lb-colors-pink6)"
  },
  "colors.pink7": {
    "value": "var(--lb-colors-pink7)",
    "variable": "var(--lb-colors-pink7)"
  },
  "colors.pink8": {
    "value": "var(--lb-colors-pink8)",
    "variable": "var(--lb-colors-pink8)"
  },
  "colors.pink9": {
    "value": "var(--lb-colors-pink9)",
    "variable": "var(--lb-colors-pink9)"
  },
  "colors.pink10": {
    "value": "var(--lb-colors-pink10)",
    "variable": "var(--lb-colors-pink10)"
  },
  "colors.pink11": {
    "value": "var(--lb-colors-pink11)",
    "variable": "var(--lb-colors-pink11)"
  },
  "colors.pink12": {
    "value": "var(--lb-colors-pink12)",
    "variable": "var(--lb-colors-pink12)"
  },
  "colors.plum1": {
    "value": "var(--lb-colors-plum1)",
    "variable": "var(--lb-colors-plum1)"
  },
  "colors.plum2": {
    "value": "var(--lb-colors-plum2)",
    "variable": "var(--lb-colors-plum2)"
  },
  "colors.plum3": {
    "value": "var(--lb-colors-plum3)",
    "variable": "var(--lb-colors-plum3)"
  },
  "colors.plum4": {
    "value": "var(--lb-colors-plum4)",
    "variable": "var(--lb-colors-plum4)"
  },
  "colors.plum5": {
    "value": "var(--lb-colors-plum5)",
    "variable": "var(--lb-colors-plum5)"
  },
  "colors.plum6": {
    "value": "var(--lb-colors-plum6)",
    "variable": "var(--lb-colors-plum6)"
  },
  "colors.plum7": {
    "value": "var(--lb-colors-plum7)",
    "variable": "var(--lb-colors-plum7)"
  },
  "colors.plum8": {
    "value": "var(--lb-colors-plum8)",
    "variable": "var(--lb-colors-plum8)"
  },
  "colors.plum9": {
    "value": "var(--lb-colors-plum9)",
    "variable": "var(--lb-colors-plum9)"
  },
  "colors.plum10": {
    "value": "var(--lb-colors-plum10)",
    "variable": "var(--lb-colors-plum10)"
  },
  "colors.plum11": {
    "value": "var(--lb-colors-plum11)",
    "variable": "var(--lb-colors-plum11)"
  },
  "colors.plum12": {
    "value": "var(--lb-colors-plum12)",
    "variable": "var(--lb-colors-plum12)"
  },
  "colors.purple1": {
    "value": "var(--lb-colors-purple1)",
    "variable": "var(--lb-colors-purple1)"
  },
  "colors.purple2": {
    "value": "var(--lb-colors-purple2)",
    "variable": "var(--lb-colors-purple2)"
  },
  "colors.purple3": {
    "value": "var(--lb-colors-purple3)",
    "variable": "var(--lb-colors-purple3)"
  },
  "colors.purple4": {
    "value": "var(--lb-colors-purple4)",
    "variable": "var(--lb-colors-purple4)"
  },
  "colors.purple5": {
    "value": "var(--lb-colors-purple5)",
    "variable": "var(--lb-colors-purple5)"
  },
  "colors.purple6": {
    "value": "var(--lb-colors-purple6)",
    "variable": "var(--lb-colors-purple6)"
  },
  "colors.purple7": {
    "value": "var(--lb-colors-purple7)",
    "variable": "var(--lb-colors-purple7)"
  },
  "colors.purple8": {
    "value": "var(--lb-colors-purple8)",
    "variable": "var(--lb-colors-purple8)"
  },
  "colors.purple9": {
    "value": "var(--lb-colors-purple9)",
    "variable": "var(--lb-colors-purple9)"
  },
  "colors.purple10": {
    "value": "var(--lb-colors-purple10)",
    "variable": "var(--lb-colors-purple10)"
  },
  "colors.purple11": {
    "value": "var(--lb-colors-purple11)",
    "variable": "var(--lb-colors-purple11)"
  },
  "colors.purple12": {
    "value": "var(--lb-colors-purple12)",
    "variable": "var(--lb-colors-purple12)"
  },
  "colors.violet1": {
    "value": "var(--lb-colors-violet1)",
    "variable": "var(--lb-colors-violet1)"
  },
  "colors.violet2": {
    "value": "var(--lb-colors-violet2)",
    "variable": "var(--lb-colors-violet2)"
  },
  "colors.violet3": {
    "value": "var(--lb-colors-violet3)",
    "variable": "var(--lb-colors-violet3)"
  },
  "colors.violet4": {
    "value": "var(--lb-colors-violet4)",
    "variable": "var(--lb-colors-violet4)"
  },
  "colors.violet5": {
    "value": "var(--lb-colors-violet5)",
    "variable": "var(--lb-colors-violet5)"
  },
  "colors.violet6": {
    "value": "var(--lb-colors-violet6)",
    "variable": "var(--lb-colors-violet6)"
  },
  "colors.violet7": {
    "value": "var(--lb-colors-violet7)",
    "variable": "var(--lb-colors-violet7)"
  },
  "colors.violet8": {
    "value": "var(--lb-colors-violet8)",
    "variable": "var(--lb-colors-violet8)"
  },
  "colors.violet9": {
    "value": "var(--lb-colors-violet9)",
    "variable": "var(--lb-colors-violet9)"
  },
  "colors.violet10": {
    "value": "var(--lb-colors-violet10)",
    "variable": "var(--lb-colors-violet10)"
  },
  "colors.violet11": {
    "value": "var(--lb-colors-violet11)",
    "variable": "var(--lb-colors-violet11)"
  },
  "colors.violet12": {
    "value": "var(--lb-colors-violet12)",
    "variable": "var(--lb-colors-violet12)"
  },
  "colors.iris1": {
    "value": "var(--lb-colors-iris1)",
    "variable": "var(--lb-colors-iris1)"
  },
  "colors.iris2": {
    "value": "var(--lb-colors-iris2)",
    "variable": "var(--lb-colors-iris2)"
  },
  "colors.iris3": {
    "value": "var(--lb-colors-iris3)",
    "variable": "var(--lb-colors-iris3)"
  },
  "colors.iris4": {
    "value": "var(--lb-colors-iris4)",
    "variable": "var(--lb-colors-iris4)"
  },
  "colors.iris5": {
    "value": "var(--lb-colors-iris5)",
    "variable": "var(--lb-colors-iris5)"
  },
  "colors.iris6": {
    "value": "var(--lb-colors-iris6)",
    "variable": "var(--lb-colors-iris6)"
  },
  "colors.iris7": {
    "value": "var(--lb-colors-iris7)",
    "variable": "var(--lb-colors-iris7)"
  },
  "colors.iris8": {
    "value": "var(--lb-colors-iris8)",
    "variable": "var(--lb-colors-iris8)"
  },
  "colors.iris9": {
    "value": "var(--lb-colors-iris9)",
    "variable": "var(--lb-colors-iris9)"
  },
  "colors.iris10": {
    "value": "var(--lb-colors-iris10)",
    "variable": "var(--lb-colors-iris10)"
  },
  "colors.iris11": {
    "value": "var(--lb-colors-iris11)",
    "variable": "var(--lb-colors-iris11)"
  },
  "colors.iris12": {
    "value": "var(--lb-colors-iris12)",
    "variable": "var(--lb-colors-iris12)"
  },
  "colors.indigo1": {
    "value": "var(--lb-colors-indigo1)",
    "variable": "var(--lb-colors-indigo1)"
  },
  "colors.indigo2": {
    "value": "var(--lb-colors-indigo2)",
    "variable": "var(--lb-colors-indigo2)"
  },
  "colors.indigo3": {
    "value": "var(--lb-colors-indigo3)",
    "variable": "var(--lb-colors-indigo3)"
  },
  "colors.indigo4": {
    "value": "var(--lb-colors-indigo4)",
    "variable": "var(--lb-colors-indigo4)"
  },
  "colors.indigo5": {
    "value": "var(--lb-colors-indigo5)",
    "variable": "var(--lb-colors-indigo5)"
  },
  "colors.indigo6": {
    "value": "var(--lb-colors-indigo6)",
    "variable": "var(--lb-colors-indigo6)"
  },
  "colors.indigo7": {
    "value": "var(--lb-colors-indigo7)",
    "variable": "var(--lb-colors-indigo7)"
  },
  "colors.indigo8": {
    "value": "var(--lb-colors-indigo8)",
    "variable": "var(--lb-colors-indigo8)"
  },
  "colors.indigo9": {
    "value": "var(--lb-colors-indigo9)",
    "variable": "var(--lb-colors-indigo9)"
  },
  "colors.indigo10": {
    "value": "var(--lb-colors-indigo10)",
    "variable": "var(--lb-colors-indigo10)"
  },
  "colors.indigo11": {
    "value": "var(--lb-colors-indigo11)",
    "variable": "var(--lb-colors-indigo11)"
  },
  "colors.indigo12": {
    "value": "var(--lb-colors-indigo12)",
    "variable": "var(--lb-colors-indigo12)"
  },
  "colors.blue1": {
    "value": "var(--lb-colors-blue1)",
    "variable": "var(--lb-colors-blue1)"
  },
  "colors.blue2": {
    "value": "var(--lb-colors-blue2)",
    "variable": "var(--lb-colors-blue2)"
  },
  "colors.blue3": {
    "value": "var(--lb-colors-blue3)",
    "variable": "var(--lb-colors-blue3)"
  },
  "colors.blue4": {
    "value": "var(--lb-colors-blue4)",
    "variable": "var(--lb-colors-blue4)"
  },
  "colors.blue5": {
    "value": "var(--lb-colors-blue5)",
    "variable": "var(--lb-colors-blue5)"
  },
  "colors.blue6": {
    "value": "var(--lb-colors-blue6)",
    "variable": "var(--lb-colors-blue6)"
  },
  "colors.blue7": {
    "value": "var(--lb-colors-blue7)",
    "variable": "var(--lb-colors-blue7)"
  },
  "colors.blue8": {
    "value": "var(--lb-colors-blue8)",
    "variable": "var(--lb-colors-blue8)"
  },
  "colors.blue9": {
    "value": "var(--lb-colors-blue9)",
    "variable": "var(--lb-colors-blue9)"
  },
  "colors.blue10": {
    "value": "var(--lb-colors-blue10)",
    "variable": "var(--lb-colors-blue10)"
  },
  "colors.blue11": {
    "value": "var(--lb-colors-blue11)",
    "variable": "var(--lb-colors-blue11)"
  },
  "colors.blue12": {
    "value": "var(--lb-colors-blue12)",
    "variable": "var(--lb-colors-blue12)"
  },
  "colors.cyan1": {
    "value": "var(--lb-colors-cyan1)",
    "variable": "var(--lb-colors-cyan1)"
  },
  "colors.cyan2": {
    "value": "var(--lb-colors-cyan2)",
    "variable": "var(--lb-colors-cyan2)"
  },
  "colors.cyan3": {
    "value": "var(--lb-colors-cyan3)",
    "variable": "var(--lb-colors-cyan3)"
  },
  "colors.cyan4": {
    "value": "var(--lb-colors-cyan4)",
    "variable": "var(--lb-colors-cyan4)"
  },
  "colors.cyan5": {
    "value": "var(--lb-colors-cyan5)",
    "variable": "var(--lb-colors-cyan5)"
  },
  "colors.cyan6": {
    "value": "var(--lb-colors-cyan6)",
    "variable": "var(--lb-colors-cyan6)"
  },
  "colors.cyan7": {
    "value": "var(--lb-colors-cyan7)",
    "variable": "var(--lb-colors-cyan7)"
  },
  "colors.cyan8": {
    "value": "var(--lb-colors-cyan8)",
    "variable": "var(--lb-colors-cyan8)"
  },
  "colors.cyan9": {
    "value": "var(--lb-colors-cyan9)",
    "variable": "var(--lb-colors-cyan9)"
  },
  "colors.cyan10": {
    "value": "var(--lb-colors-cyan10)",
    "variable": "var(--lb-colors-cyan10)"
  },
  "colors.cyan11": {
    "value": "var(--lb-colors-cyan11)",
    "variable": "var(--lb-colors-cyan11)"
  },
  "colors.cyan12": {
    "value": "var(--lb-colors-cyan12)",
    "variable": "var(--lb-colors-cyan12)"
  },
  "colors.teal1": {
    "value": "var(--lb-colors-teal1)",
    "variable": "var(--lb-colors-teal1)"
  },
  "colors.teal2": {
    "value": "var(--lb-colors-teal2)",
    "variable": "var(--lb-colors-teal2)"
  },
  "colors.teal3": {
    "value": "var(--lb-colors-teal3)",
    "variable": "var(--lb-colors-teal3)"
  },
  "colors.teal4": {
    "value": "var(--lb-colors-teal4)",
    "variable": "var(--lb-colors-teal4)"
  },
  "colors.teal5": {
    "value": "var(--lb-colors-teal5)",
    "variable": "var(--lb-colors-teal5)"
  },
  "colors.teal6": {
    "value": "var(--lb-colors-teal6)",
    "variable": "var(--lb-colors-teal6)"
  },
  "colors.teal7": {
    "value": "var(--lb-colors-teal7)",
    "variable": "var(--lb-colors-teal7)"
  },
  "colors.teal8": {
    "value": "var(--lb-colors-teal8)",
    "variable": "var(--lb-colors-teal8)"
  },
  "colors.teal9": {
    "value": "var(--lb-colors-teal9)",
    "variable": "var(--lb-colors-teal9)"
  },
  "colors.teal10": {
    "value": "var(--lb-colors-teal10)",
    "variable": "var(--lb-colors-teal10)"
  },
  "colors.teal11": {
    "value": "var(--lb-colors-teal11)",
    "variable": "var(--lb-colors-teal11)"
  },
  "colors.teal12": {
    "value": "var(--lb-colors-teal12)",
    "variable": "var(--lb-colors-teal12)"
  },
  "colors.jade1": {
    "value": "var(--lb-colors-jade1)",
    "variable": "var(--lb-colors-jade1)"
  },
  "colors.jade2": {
    "value": "var(--lb-colors-jade2)",
    "variable": "var(--lb-colors-jade2)"
  },
  "colors.jade3": {
    "value": "var(--lb-colors-jade3)",
    "variable": "var(--lb-colors-jade3)"
  },
  "colors.jade4": {
    "value": "var(--lb-colors-jade4)",
    "variable": "var(--lb-colors-jade4)"
  },
  "colors.jade5": {
    "value": "var(--lb-colors-jade5)",
    "variable": "var(--lb-colors-jade5)"
  },
  "colors.jade6": {
    "value": "var(--lb-colors-jade6)",
    "variable": "var(--lb-colors-jade6)"
  },
  "colors.jade7": {
    "value": "var(--lb-colors-jade7)",
    "variable": "var(--lb-colors-jade7)"
  },
  "colors.jade8": {
    "value": "var(--lb-colors-jade8)",
    "variable": "var(--lb-colors-jade8)"
  },
  "colors.jade9": {
    "value": "var(--lb-colors-jade9)",
    "variable": "var(--lb-colors-jade9)"
  },
  "colors.jade10": {
    "value": "var(--lb-colors-jade10)",
    "variable": "var(--lb-colors-jade10)"
  },
  "colors.jade11": {
    "value": "var(--lb-colors-jade11)",
    "variable": "var(--lb-colors-jade11)"
  },
  "colors.jade12": {
    "value": "var(--lb-colors-jade12)",
    "variable": "var(--lb-colors-jade12)"
  },
  "colors.green1": {
    "value": "var(--lb-colors-green1)",
    "variable": "var(--lb-colors-green1)"
  },
  "colors.green2": {
    "value": "var(--lb-colors-green2)",
    "variable": "var(--lb-colors-green2)"
  },
  "colors.green3": {
    "value": "var(--lb-colors-green3)",
    "variable": "var(--lb-colors-green3)"
  },
  "colors.green4": {
    "value": "var(--lb-colors-green4)",
    "variable": "var(--lb-colors-green4)"
  },
  "colors.green5": {
    "value": "var(--lb-colors-green5)",
    "variable": "var(--lb-colors-green5)"
  },
  "colors.green6": {
    "value": "var(--lb-colors-green6)",
    "variable": "var(--lb-colors-green6)"
  },
  "colors.green7": {
    "value": "var(--lb-colors-green7)",
    "variable": "var(--lb-colors-green7)"
  },
  "colors.green8": {
    "value": "var(--lb-colors-green8)",
    "variable": "var(--lb-colors-green8)"
  },
  "colors.green9": {
    "value": "var(--lb-colors-green9)",
    "variable": "var(--lb-colors-green9)"
  },
  "colors.green10": {
    "value": "var(--lb-colors-green10)",
    "variable": "var(--lb-colors-green10)"
  },
  "colors.green11": {
    "value": "var(--lb-colors-green11)",
    "variable": "var(--lb-colors-green11)"
  },
  "colors.green12": {
    "value": "var(--lb-colors-green12)",
    "variable": "var(--lb-colors-green12)"
  },
  "colors.grass1": {
    "value": "var(--lb-colors-grass1)",
    "variable": "var(--lb-colors-grass1)"
  },
  "colors.grass2": {
    "value": "var(--lb-colors-grass2)",
    "variable": "var(--lb-colors-grass2)"
  },
  "colors.grass3": {
    "value": "var(--lb-colors-grass3)",
    "variable": "var(--lb-colors-grass3)"
  },
  "colors.grass4": {
    "value": "var(--lb-colors-grass4)",
    "variable": "var(--lb-colors-grass4)"
  },
  "colors.grass5": {
    "value": "var(--lb-colors-grass5)",
    "variable": "var(--lb-colors-grass5)"
  },
  "colors.grass6": {
    "value": "var(--lb-colors-grass6)",
    "variable": "var(--lb-colors-grass6)"
  },
  "colors.grass7": {
    "value": "var(--lb-colors-grass7)",
    "variable": "var(--lb-colors-grass7)"
  },
  "colors.grass8": {
    "value": "var(--lb-colors-grass8)",
    "variable": "var(--lb-colors-grass8)"
  },
  "colors.grass9": {
    "value": "var(--lb-colors-grass9)",
    "variable": "var(--lb-colors-grass9)"
  },
  "colors.grass10": {
    "value": "var(--lb-colors-grass10)",
    "variable": "var(--lb-colors-grass10)"
  },
  "colors.grass11": {
    "value": "var(--lb-colors-grass11)",
    "variable": "var(--lb-colors-grass11)"
  },
  "colors.grass12": {
    "value": "var(--lb-colors-grass12)",
    "variable": "var(--lb-colors-grass12)"
  },
  "colors.lime1": {
    "value": "var(--lb-colors-lime1)",
    "variable": "var(--lb-colors-lime1)"
  },
  "colors.lime2": {
    "value": "var(--lb-colors-lime2)",
    "variable": "var(--lb-colors-lime2)"
  },
  "colors.lime3": {
    "value": "var(--lb-colors-lime3)",
    "variable": "var(--lb-colors-lime3)"
  },
  "colors.lime4": {
    "value": "var(--lb-colors-lime4)",
    "variable": "var(--lb-colors-lime4)"
  },
  "colors.lime5": {
    "value": "var(--lb-colors-lime5)",
    "variable": "var(--lb-colors-lime5)"
  },
  "colors.lime6": {
    "value": "var(--lb-colors-lime6)",
    "variable": "var(--lb-colors-lime6)"
  },
  "colors.lime7": {
    "value": "var(--lb-colors-lime7)",
    "variable": "var(--lb-colors-lime7)"
  },
  "colors.lime8": {
    "value": "var(--lb-colors-lime8)",
    "variable": "var(--lb-colors-lime8)"
  },
  "colors.lime9": {
    "value": "var(--lb-colors-lime9)",
    "variable": "var(--lb-colors-lime9)"
  },
  "colors.lime10": {
    "value": "var(--lb-colors-lime10)",
    "variable": "var(--lb-colors-lime10)"
  },
  "colors.lime11": {
    "value": "var(--lb-colors-lime11)",
    "variable": "var(--lb-colors-lime11)"
  },
  "colors.lime12": {
    "value": "var(--lb-colors-lime12)",
    "variable": "var(--lb-colors-lime12)"
  },
  "colors.mint1": {
    "value": "var(--lb-colors-mint1)",
    "variable": "var(--lb-colors-mint1)"
  },
  "colors.mint2": {
    "value": "var(--lb-colors-mint2)",
    "variable": "var(--lb-colors-mint2)"
  },
  "colors.mint3": {
    "value": "var(--lb-colors-mint3)",
    "variable": "var(--lb-colors-mint3)"
  },
  "colors.mint4": {
    "value": "var(--lb-colors-mint4)",
    "variable": "var(--lb-colors-mint4)"
  },
  "colors.mint5": {
    "value": "var(--lb-colors-mint5)",
    "variable": "var(--lb-colors-mint5)"
  },
  "colors.mint6": {
    "value": "var(--lb-colors-mint6)",
    "variable": "var(--lb-colors-mint6)"
  },
  "colors.mint7": {
    "value": "var(--lb-colors-mint7)",
    "variable": "var(--lb-colors-mint7)"
  },
  "colors.mint8": {
    "value": "var(--lb-colors-mint8)",
    "variable": "var(--lb-colors-mint8)"
  },
  "colors.mint9": {
    "value": "var(--lb-colors-mint9)",
    "variable": "var(--lb-colors-mint9)"
  },
  "colors.mint10": {
    "value": "var(--lb-colors-mint10)",
    "variable": "var(--lb-colors-mint10)"
  },
  "colors.mint11": {
    "value": "var(--lb-colors-mint11)",
    "variable": "var(--lb-colors-mint11)"
  },
  "colors.mint12": {
    "value": "var(--lb-colors-mint12)",
    "variable": "var(--lb-colors-mint12)"
  },
  "colors.sky1": {
    "value": "var(--lb-colors-sky1)",
    "variable": "var(--lb-colors-sky1)"
  },
  "colors.sky2": {
    "value": "var(--lb-colors-sky2)",
    "variable": "var(--lb-colors-sky2)"
  },
  "colors.sky3": {
    "value": "var(--lb-colors-sky3)",
    "variable": "var(--lb-colors-sky3)"
  },
  "colors.sky4": {
    "value": "var(--lb-colors-sky4)",
    "variable": "var(--lb-colors-sky4)"
  },
  "colors.sky5": {
    "value": "var(--lb-colors-sky5)",
    "variable": "var(--lb-colors-sky5)"
  },
  "colors.sky6": {
    "value": "var(--lb-colors-sky6)",
    "variable": "var(--lb-colors-sky6)"
  },
  "colors.sky7": {
    "value": "var(--lb-colors-sky7)",
    "variable": "var(--lb-colors-sky7)"
  },
  "colors.sky8": {
    "value": "var(--lb-colors-sky8)",
    "variable": "var(--lb-colors-sky8)"
  },
  "colors.sky9": {
    "value": "var(--lb-colors-sky9)",
    "variable": "var(--lb-colors-sky9)"
  },
  "colors.sky10": {
    "value": "var(--lb-colors-sky10)",
    "variable": "var(--lb-colors-sky10)"
  },
  "colors.sky11": {
    "value": "var(--lb-colors-sky11)",
    "variable": "var(--lb-colors-sky11)"
  },
  "colors.sky12": {
    "value": "var(--lb-colors-sky12)",
    "variable": "var(--lb-colors-sky12)"
  },
  "shadows.sm": {
    "value": "var(--lb-shadows-sm)",
    "variable": "var(--lb-shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--lb-shadows-md)",
    "variable": "var(--lb-shadows-md)"
  },
  "shadows.focus": {
    "value": "var(--lb-shadows-focus)",
    "variable": "var(--lb-shadows-focus)"
  },
  "spacing.-1": {
    "value": "calc(var(--lb-spacing-1) * -1)",
    "variable": "var(--lb-spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--lb-spacing-2) * -1)",
    "variable": "var(--lb-spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--lb-spacing-3) * -1)",
    "variable": "var(--lb-spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--lb-spacing-4) * -1)",
    "variable": "var(--lb-spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--lb-spacing-5) * -1)",
    "variable": "var(--lb-spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--lb-spacing-6) * -1)",
    "variable": "var(--lb-spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--lb-spacing-7) * -1)",
    "variable": "var(--lb-spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--lb-spacing-8) * -1)",
    "variable": "var(--lb-spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--lb-spacing-9) * -1)",
    "variable": "var(--lb-spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--lb-spacing-10) * -1)",
    "variable": "var(--lb-spacing-10)"
  },
  "colors.colorPalette": {
    "value": "var(--lb-colors-color-palette)",
    "variable": "var(--lb-colors-color-palette)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar