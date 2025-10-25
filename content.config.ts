import { defineCollection, defineContentConfig, z } from '@nuxt/content'

function createImageSchema() {
  return z.object({
    src: z.string().editor({ input: 'media' }),
    alt: z.string(),
  })
}

function createButtonSchema() {
  return z.object({
    label: z.string(),
    icon: z.string().optional(),
    to: z.string().optional(),
    color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
    size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
    variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
    target: z.enum(['_blank', '_self']).optional(),
  })
}

const commonIndexSchema = z.object({
  hero: z.object({
    motion: createImageSchema(),
    still: createImageSchema(),
  }),
})

const commonMotionSchema = z.object({
  title: z.string().nonempty(),
  directPlayUrl: z.string().nonempty(),
  thumbnailUrl: z.string().nonempty(),
  date: z.date(),
  synopsis: z.string().nonempty(),
  credits: z.array(z.object({
    role: z.string(),
    name: z.string(),
  })),
  info: z.array(z.object({
    title: z.string(),
    text: z.string(),
  })),
  links: z.array(createButtonSchema()),
})

const commonStillSchema = z.object({
  stills: z.array(createImageSchema()),
})

const commonAboutSchema = z.object({
  portrait: createImageSchema(),
  subtitle: z.string(),
  bio: z.string(),
  links: z.array(createButtonSchema()),
})

export default defineContentConfig({
  collections: {
    index_en: defineCollection({
      type: 'page',
      source: 'en/index.yml',
      schema: commonIndexSchema,
    }),

    motion_en: defineCollection({
      type: 'page',
      source: 'en/motion/*.yml',
      schema: commonMotionSchema,
    }),

    still_en: defineCollection({
      type: 'page',
      source: 'en/still.yml',
      schema: commonStillSchema,
    }),

    about_en: defineCollection({
      type: 'page',
      source: 'en/about.yml',
      schema: commonAboutSchema,
    }),

    pages_en: defineCollection({
      type: 'page',
      source: [
        { include: 'en/motion.yml' },
      ],
    }),

    index_zh_cn: defineCollection({
      type: 'page',
      source: 'zh_cn/index.yml',
      schema: commonIndexSchema,
    }),

    motion_zh_cn: defineCollection({
      type: 'page',
      source: 'zh_cn/motion/*.yml',
      schema: commonMotionSchema,
    }),

    still_zh_cn: defineCollection({
      type: 'page',
      source: 'zh_cn/still.yml',
      schema: commonStillSchema,
    }),

    about_zh_cn: defineCollection({
      type: 'page',
      source: 'zh_cn/about.yml',
      schema: commonAboutSchema,
    }),

    pages_zh_cn: defineCollection({
      type: 'page',
      source: [
        { include: 'zh_cn/motion.yml' },
      ],
    }),
  },
})
