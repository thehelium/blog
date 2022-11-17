import { Fragment } from 'react';
import { GetStaticProps } from 'next';
import { ButtonPop } from 'src/types/ui/button-accent';

import type { Project } from 'src/types/project';

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
