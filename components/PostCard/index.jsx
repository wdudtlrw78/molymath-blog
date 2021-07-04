import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Card,
  Meta,
  DateAndCategoryContainer,
  Date,
  CategoryBox,
  AarticleContainer,
  Title,
  Description,
} from './styles';

dayjs.locale('ko');
dayjs.extend(relativeTime);

const PostCard = ({ slug, title, date, category, description }) => {
  const router = useRouter();
  const { navMenu } = router.query;
  return (
    <Card>
      <Link href={`/post/${slug}`} prefetch={false}>
        <a>
          <Meta>
            <DateAndCategoryContainer>
              <Date>{dayjs(date).format('MMM.DD.YYYY')}</Date>
              {navMenu ? null : (
                <CategoryBox>
                  <span>{category}</span>
                </CategoryBox>
              )}
            </DateAndCategoryContainer>
            <AarticleContainer>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </AarticleContainer>
          </Meta>
        </a>
      </Link>
    </Card>
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
