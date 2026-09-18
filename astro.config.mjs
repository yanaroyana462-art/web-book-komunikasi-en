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
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Introduction & How to Use', slug: 'pengantar' },
          ],
        },
        {
          label: 'Part 1: Foundations & Speech Ethics',
          items: [
            { label: 'Chapter 1: The Qaulan Principles', slug: 'bab-1-prinsip-qaulan' },
            { label: 'Chapter 2: The Art of Active Listening', slug: 'bab-2-active-listening' },
            { label: 'Chapter 3: Body Language & Non-Verbal Cues', slug: 'bab-3-bahasa-tubuh' },
            { label: 'Chapter 4: Within Family & Home', slug: 'bab-4-keluarga' },
          ],
        },
        {
          label: 'Part 2: Audience-Based Communication',
          items: [
            { label: 'Chapter 5: Companions & Work Teams', slug: 'bab-5-sahabat' },
            { label: 'Chapter 6: Society & The General Public', slug: 'bab-6-masyarakat' },
            { label: 'Chapter 7: Adversaries & Oppositions', slug: 'bab-7-musuh-oposisi' },
          ],
        },
        {
          label: 'Part 3: Special Scenarios',
          items: [
            { label: 'Chapter 8: Leadership & Strategy', slug: 'bab-8-kepemimpinan' },
            { label: 'Chapter 9: In Crisis & High Pressure', slug: 'bab-9-krisis-perang' },
            { label: 'Chapter 10: Delivering Criticism & Evaluation', slug: 'bab-10-kritik-evaluasi' },
          ],
        },
        {
          label: 'Back Matter',
          items: [
            { label: 'References & Bibliography', slug: 'referensi' },
          ],
        },
      ],
    }),
  ],
});