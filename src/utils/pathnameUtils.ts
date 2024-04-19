export async function generatePathname({ params }: { params: { slug: string } }) {
    return `/blog/${params.slug}`;
   }