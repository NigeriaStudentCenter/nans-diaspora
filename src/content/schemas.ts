import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "subheading": z.string(),
      "cta1": z.string(),
      "cta2": z.string()
    }),
    "stats": z.array(z.object({
      "id": z.string(),
      "value": z.string(),
      "label": z.string()
    })),
    "initiative": z.object({
      "label": z.string(),
      "title": z.string(),
      "description": z.string(),
      "cta": z.string()
    }),
    "news": z.object({
      "sectionLabel": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "category": z.string(),
        "title": z.string(),
        "excerpt": z.string(),
        "date": z.string()
      }))
    }),
    "partners": z.object({
      "sectionLabel": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "url": z.string().optional()
      }))
    })
  }),
  about: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "mission": z.object({
      "label": z.string(),
      "text": z.string()
    }),
    "mandate": z.object({
      "label": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    "overview": z.string()
  }),
  constitution: z.object({
    "title": z.string(),
    "subtitle": z.string(),
    "lastAmended": z.string(),
    "sections": z.array(z.object({
      "id": z.string(),
      "number": z.string(),
      "title": z.string(),
      "content": z.string()
    }))
  }),
  history: z.object({
    "title": z.string(),
    "subtitle": z.string(),
    "intro": z.string(),
    "milestones": z.array(z.object({
      "id": z.string(),
      "year": z.string(),
      "title": z.string(),
      "description": z.string()
    }))
  }),
  news_events: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "featured": z.object({
      "category": z.string(),
      "title": z.string(),
      "description": z.string(),
      "date": z.string(),
      "location": z.string(),
      "cta": z.string()
    }),
    "articles": z.array(z.object({
      "id": z.string(),
      "category": z.string(),
      "title": z.string(),
      "excerpt": z.string(),
      "date": z.string(),
      "readTime": z.string()
    })),
    "upcomingEvents": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "date": z.string(),
      "location": z.string(),
      "type": z.string()
    }))
  }),
  contact: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "contacts": z.array(z.object({
      "id": z.string(),
      "role": z.string(),
      "email": z.string()
    })),
    "social": z.object({
      "twitter": z.string(),
      "facebook": z.string(),
      "instagram": z.string()
    }),
    "sponsorship": z.object({
      "title": z.string(),
      "description": z.string()
    })
  }),
  government: z.object({
    "hero": z.object({
      "title": z.string(),
      "subtitle": z.string()
    }),
    "subpages": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "path": z.string(),
      "description": z.string()
    }))
  }),
  chapter_presidents: z.array(z.object({
    "id": z.string(),
    "name": z.string(),
    "title": z.string(),
    "chapter": z.string(),
    "region": z.string(),
    "swayUrl": z.string(),
    "photo": z.string()
  })),
  executives: z.array(z.object({
    "id": z.string(),
    "name": z.string(),
    "title": z.string(),
    "chapter": z.string(),
    "region": z.string(),
    "swayUrl": z.string(),
    "photo": z.string()
  })),
  pioneers: z.array(z.object({
    "id": z.string(),
    "name": z.string(),
    "title": z.string(),
    "chapter": z.string(),
    "region": z.string(),
    "swayUrl": z.string(),
    "photo": z.string()
  })),
  senate: z.array(z.object({
    "id": z.string(),
    "name": z.string(),
    "title": z.string(),
    "chapter": z.string(),
    "region": z.string(),
    "swayUrl": z.string(),
    "photo": z.string()
  })),
  hall_of_fame: z.array(z.object({
    "id": z.string(),
    "name": z.string(),
    "title": z.string(),
    "chapter": z.string(),
    "region": z.string(),
    "swayUrl": z.string(),
    "photo": z.string()
  })),
  pages: {
    news_events: z.object({
      "hero": z.object({
        "title": z.string(),
        "subtitle": z.string()
      }),
      "featured": z.object({
        "category": z.string(),
        "title": z.string(),
        "description": z.string(),
        "date": z.string(),
        "location": z.string(),
        "cta": z.string()
      }),
      "articles": z.array(z.object({
        "id": z.string(),
        "category": z.string(),
        "title": z.string(),
        "excerpt": z.string(),
        "date": z.string(),
        "readTime": z.string()
      })),
      "upcomingEvents": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "date": z.string(),
        "location": z.string(),
        "type": z.string()
      }))
    })
  }
};
export type Schemas = typeof schemas;