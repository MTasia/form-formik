import { createSelector } from 'reselect'

export const getValues = (state) => (
        state.formReducer.values
    )

export const makeGetValues = createSelector(
    getValues,
    (values) => values
)