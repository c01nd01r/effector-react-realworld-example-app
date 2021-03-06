import { createEffect, forward, attach } from 'effector-root';
import { request } from '../../../../../api';
import { limit } from '../../../../../library/limit';
import * as feed from '../../../../../modules/feed';
import * as types from './types';

export const {
  Gate,
  currentPageWasSet,
  favoriteToggled,
  $currentPage,
  $articles,
  $totalPages,
  $feed,
  $pageSize,
  useModel,
} = feed.createFeedModel();

export const fetchFeedFx = createEffect(
  ({ pageSize, page }: types.fetchFeedFxArgs) =>
    request
      .get<feed.types.Feed>(`articles?${limit(pageSize, page)}`)
      .then((x) => x.data),
);

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
