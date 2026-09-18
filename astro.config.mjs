import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Prophetic Communication',
      customCss: [
        './src/styles/custom.css',
      ],
      defaultLocale: 'root',
      components: {
        Footer: './src/components/CustomFooter.astro',
        SocialIcons: './src/components/LanguageSwitch.astro',
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Introduction & How to Use', slug: 'introduction--how-to-use-this-book' },
          ],
        },
        {
          label: 'Part 1: Foundations & Speech Ethics',
          items: [
            { label: 'Chapter 1: The Qaulan Principles', slug: 'chapter-1-foundations-of-speech--the-6-principles-of-qaulan' },
            { label: 'Chapter 2: The Art of Listening', slug: 'chapter-2-the-art-of-listening-active-listening' },
            { label: 'Chapter 3: Clarity, Tone & Body Language', slug: 'chapter-3-clarity-tone-of-voice--body-language' },
            { label: 'Chapter 4: Inside the Home', slug: 'chapter-4-inside-the-home-spouse--children' },
          ],
        },
        {
          label: 'Part 2: Audience-Based Communication',
          items: [
            { label: 'Chapter 5: With Companions & Team', slug: 'chapter-5-with-companions--team-members' },
            { label: 'Chapter 6: To General Public & Laypeople', slug: 'chapter-6-to-the-general-public--laypeople' },
            { label: 'Chapter 7: To Enemies & Opponents', slug: 'chapter-7-to-enemies--opponents' },
          ],
        },
        {
          label: 'Part 3: Special Scenarios',
          items: [
            { label: 'Chapter 8: Leadership & Strategy', slug: 'chapter-8-leadership--strategic-communication' },
            { label: 'Chapter 9: In Crisis, War & High Pressure', slug: 'chapter-9-in-crisis-war--high-pressure' },
            { label: 'Chapter 10: Delivering Criticism', slug: 'chapter-10-delivering-criticism--correcting-mistakes' },
          ],
        },
        {
          label: 'Back Matter',
          items: [
            { label: 'References & Bibliography', slug: 'references--bibliography' },
          ],
        },
      ],
    }),
  ],
});