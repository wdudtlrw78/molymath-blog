import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { useRouter } from 'next/router';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCard = ({ slug, title, date, category, description }) => {
  const router = useRouter();
  const { navMenu } = router.query;
  return (
    <div>
      <Link href={`/post/${slug}`} prefetch={false}>
        <a>
          <div>
            <div>
              <div>{dayjs(date).format('MMM.DD.YYYY')}</div>
              {navMenu ? null : (
                <div>
                  <span>{category}</span>
                </div>
              )}
            </div>
            <div>
              <h1>{title}</h1>
              <div>{description}</div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

PostCard.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostCard;
