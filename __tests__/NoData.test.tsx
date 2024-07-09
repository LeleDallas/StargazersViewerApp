import { render } from "@testing-library/react-native";
import NoData from "../src/components/NoData";


describe('NoData', () => {
    it('should render correctly', () => {
        const { queryByTestId } = render(<NoData length={0} loading={false} />);
        expect(queryByTestId('loading')).toBeNull();
    });


    it('should render nothing', () => {
        const { queryByTestId } = render(<NoData length={1} loading={false} />);
        expect(queryByTestId('loading')).toBeNull();
        expect(queryByTestId('no-data')).toBeNull();
    });
})