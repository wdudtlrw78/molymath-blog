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
    <div className="group py-12 mx-minus32 border-b flex justify-center items-center flex-col cursor-pointer lg:mx-0">
      <Link href={`/post/${slug}`} prefetch={false}>
        <a>
          <div>
            <div className="flex justify-center">
              <div className="text-small opacity-80">{dayjs(date).format('MMM.DD.YYYY')}</div>
              {navMenu ? null : (
                <div className="flex justify-center items-center w-106 h-6 ml-2 shadow rounded-small">
                  <span className="text-small opacity-80">{category}</span>
                </div>
              )}
            </div>
            <div className="text-center">
              <h1 className="text-title font-semibold group-hover:text-main group-hover:opacity-80 transition-colors my-2">
                {title}
              </h1>
              <p className="text-small opacity-80">{description}</p>
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
