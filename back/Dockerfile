FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline

COPY . .
RUN mvn clean package -Dskiptest

FROM eclipse-temurin:17-jdk
WORKDIR /app
#COPY upload /app/upload # 업로드 폴더가 있을 때만 사용
COPY --from=build /build/target/*.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "/app/app.jar"]