import { FlatList } from "react-native";

const VirtualizedView = ({children}) => {
    return (
        <FlatList
        style={{flex:1 }}
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => "dummy"}
      renderItem={null}
      ListHeaderComponent={() => (
        <>{children}</>
      )}
    />
    );
};

export default VirtualizedView;