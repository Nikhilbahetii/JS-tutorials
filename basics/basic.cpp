#include <iostream>
using namespace std;

class Hero {
    public:
    int health;
    private:
    char level;
    public:

    char getlevel(){
        return level;
    }
    void setlevel(char l){
        level = l;
    }
};

int main (){
    Hero zedd;
    zedd.health = 70;
    zedd.setlevel('Z');
    cout<<"Zedd health :"<<zedd.health<<endl;
    cout<<"Zedd level :"<<zedd.getlevel()<<endl;


    return 0;
}