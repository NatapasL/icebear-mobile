import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

const { GREY_1, CYAN, BLACK } = Colors

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: CYAN,
    alignSelf: 'stretch',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 52,
  },
  topRightSection: {
    backgroundColor: GREY_1,
    width: 93,
    height: 130,
    position: 'absolute',
    right: 0,
    top: 0,
    borderBottomLeftRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 25,
    top: 50,
    width: 30,
    height: 30,
  },
  titleContainer: {
    marginTop: 104,
    flexDirection: 'row',
  },
  title: {
    fontSize: 36,
    color: BLACK,
  },
  titleBold: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  subtitle: {
    fontSize: 20,
    color: BLACK,
    marginTop: 8,
  },
  childrenContainer: {
    marginTop: 32,
  },
})
