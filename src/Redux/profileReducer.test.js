import profileReduser, { addPost, deletePost } from "./profileReducer";


let state = {
    posts: [
        { id: 1, like: 15, message: 'Hi, how are you?' },
        { id: 2, like: 20, message: "It's my first post" },
        { id: 3, like: 25, message: "It's my first post" }
    ]
}

test('length of posts should be increment', () => {
 
let action = addPost('aaaa')
let newState = profileReduser (state,action)

    expect(newState.posts.length).toBe(4);
  });

  test('message of new post should be correct', () => {
 
    let action = addPost('aaaa') 
    let newState = profileReduser (state,action)
    
        expect(newState.posts[3].message).toBe('aaaa');
      });

      
  test('after deleting length of messages should be decrement', () => {
 
    let action = deletePost(1) 
    let newState = profileReduser (state,action)
    
        expect(newState.posts.length).toBe(2);
      });
             
  test('should be decrement if is incorrect', () => {
 
    let action = deletePost(1000) 
    let newState = profileReduser (state,action)
    
        expect(newState.posts.length).toBe(3);
      });